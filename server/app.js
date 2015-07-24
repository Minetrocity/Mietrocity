var less = require('less-middleware');
var path = require('path');
var logger = require('morgan');
var uuid = require('node-uuid');
var config = require('config').server;
var express = require('express');
var compress = require('compression');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || config.port || '3000');

function isProduction() {
  'use strict';

  var env = app.get('env');
  return env === 'staging' || env === 'production';
}

if(!isProduction()) {
  app.use(logger('dev'));
}

app.use(compress());

if(!isProduction()) {
  var lessMiddleware = require('less-middleware');
  app.use(lessMiddleware('client', {
    debug: true,
    dest: 'client',
    force: true
  }));
}

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var mtSession = session({
  genid: uuid.v4,
  secret: 'minetrocitysecret',
  name: 'minetrocitysecret.sid',
  saveUninitialized: false,
  resave: true
})
app.use(mtSession);
io.use(function (socket, next) {
    mtSession(socket.request, socket.request.res, next);
});

//Setup middlewares
require('./tools/middlewares').addMiddlewares(__dirname + '/middlewares/', app, {});

// app.use(require('./tools/rememberme').checkRememberMe);
app.use(express.static(isProduction() ? 'build' : 'client'));

//Setup routes
require('./tools/routes').addRoutes(__dirname + '/routes/', '', app);

app.use(function(err, req, res, next) {
  'use strict';

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: !isProduction() ? err : {}
  });
});

io.on('connection', function (socket) {});

var server = http.listen(app.get('port'), function () {
  'use strict';

  console.log('Express server listening on port', app.get('port'));
});

var fs = require('fs');
var _ = require('lodash');

module.exports = {
  addMiddlewares: function (loc, app, args) {
    'use strict';

    _.each(fs.readdirSync(loc), function (item) {
      if(item.indexOf('.js') >= 1) {
        app.use(require(loc + item)(args));
      }
    });
  }
};

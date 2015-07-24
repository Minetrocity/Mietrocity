var fs = require('fs');
var _ = require('lodash');

module.exports = {
  addRoutes: function (loc, path, app) {
    'use strict';
    var _this = this;

    _.each(fs.readdirSync(loc), function (item) {
      if(fs.statSync(loc + item).isDirectory()) {
        return _this.addRoutes(loc + item + '/', '/' + item, app);
      }

      if(item.indexOf('.js') >= 1) {
        app.use(path + '/' + item.substr(0, item.indexOf('.js')), require(loc + item));
      }
    });
  }
};

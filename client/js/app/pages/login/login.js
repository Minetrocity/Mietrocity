angular.module('minetrocity.pages.login',
  [
    'ngMaterial',
    'ui.router'
  ]
).constant('state', {
  state: 'login',
  label: 'login',
  title: 'Log In',
  url: '/login',
  templateUrl: 'js/app/pages/login/login.html',
  controller: 'loginCtrl',
  controllerAs: 'vm',
  allowAnonymous: true
}).config(
  function ($stateProvider, state) {
    $stateProvider.state(state.state, state);
  }
).factory('loginApi',
  function ($http) {
    'use strict';

    return {};
  }
).controller('loginCtrl',
  function () {
    'use strict';

    var vm = this;

    vm.test = 'Test';
  }
);

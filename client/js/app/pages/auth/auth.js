angular.module('minetrocity.pages.auth',
  [
    'ngMaterial',
    'ui.router',

    'minetrocity.components.directives.sidenav',
    'minetrocity.components.directives.toolbar',

    'minetrocity.pages.auth.main'
  ]
).constant('state', {
  state: 'auth',
  label: 'auth',
  title: 'auth',
  url: '/auth',
  templateUrl: 'js/app/pages/auth/auth.html',
  controller: 'authCtrl',
  controllerAs: 'vm',
  allowAnonymous: true
}).config(
  function ($stateProvider, state) {
    $stateProvider.state(state.state, state);
  }
).controller('authCtrl',
  function ($state) {
    'use strict';

    var vm = this;

    vm.go = $state.go;
  }
);

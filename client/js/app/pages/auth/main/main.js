angular.module('minetrocity.pages.auth.main',
  [
    'ngMaterial',
    'ui.router'
  ]
).constant('state', {
  state: 'auth.main',
  label: 'main',
  title: 'main',
  url: '^/',
  templateUrl: 'js/app/pages/auth/main/main.html',
  controller: 'mainCtrl',
  controllerAs: 'vm',
  allowAnonymous: true
}).config(
  function ($stateProvider, state) {
    $stateProvider.state(state.state, state);
  }
).controller('mainCtrl',
  function ($state) {
    'use strict';

    var vm = this;

    vm.go = $state.go;
  }
);

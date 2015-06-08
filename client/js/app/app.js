angular.module('minetrocity',
  [
    'angular-loading-bar',
    'ui.router',

    'minetrocity.pages.login',
    'minetrocity.pages.auth'
  ]
).config(
  function ($urlRouterProvider, cfpLoadingBarProvider) {
    'use strict';

    // Don't use spinner
    cfpLoadingBarProvider.includeSpinner = false;

    $urlRouterProvider.otherwise('/');
  }
);

angular.bootstrap(document, ['minetrocity']);

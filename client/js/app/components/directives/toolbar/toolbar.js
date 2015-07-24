angular.module('minetrocity.components.directives.toolbar',
  [
    'ngMaterial'
  ]
).directive('toolbar',
  function () {
    'use strict';

    return {
      replace: true,
      templateUrl: 'js/app/components/directives/toolbar/toolbar.html',
      controller: 'toolbarController',
      controllerAs: 'vm'
    };
  }
).controller('toolbarController',
  function ($mdUtil, $mdSidenav) {
    'use strict';

    var vm = this;

    vm.logout = undefined;
    vm.showSidenav = $mdSidenav('sidenav').toggle;
  }
);

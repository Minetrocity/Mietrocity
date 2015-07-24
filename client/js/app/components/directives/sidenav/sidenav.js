angular.module('minetrocity.components.directives.sidenav',
  [
    'ngMaterial',
    'ui.router',

    'minetrocity.components.constants'
  ]
).directive('sidenav',
  function () {
    'use strict';

    return {
      replace: true,
      templateUrl: 'js/app/components/directives/sidenav/sidenav.html',
      controller: 'sidenavController',
      controllerAs: 'vm2'
    };
  }
).controller('sidenavController',
  function ($state, $mdSidenav, navigation) {
    'use strict';

    var vm = this;

    vm.test = 'Test';

    vm.navigation = navigation;
    vm.navigate = function (state) {
      $mdSidenav('sidenav').close();
      $state.go(state.state);
    };
  }
);

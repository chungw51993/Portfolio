angular.module('portfolio.main', [])

.directive('main', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/main/main.html',
    controller: 'MainCtrl',
    controllerAs: 'info'
  }
})
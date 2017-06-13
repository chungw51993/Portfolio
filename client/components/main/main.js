angular.module('portfolio.main', [])

.directive('main', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/main/main.html'
  };
});
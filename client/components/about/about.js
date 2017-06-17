angular.module('portfolio')

.directive('about', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/about/about.html'
  };
});
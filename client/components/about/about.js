angular.module('portfolio.about', [])

.directive('about', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/about/about.html'
  };
});
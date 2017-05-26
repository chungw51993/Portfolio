angular.module('portfolio.about', [])

.directive('about', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/about/about.html'
  }
})
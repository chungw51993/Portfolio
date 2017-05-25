angular.module('portfolio.about', [])

.controller('AboutCtrl', function() {

})
.directive('about', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/about/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'info'
  }
})
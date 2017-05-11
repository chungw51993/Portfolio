angular.module('portfolio.project', [])

.controller('ProjectCtrl', function($scope) {

})
.directive('project', function() {
  return {
    restrict: 'E',
    scope: {
      project: '<'
    },
    templateUrl: '/project/project.html',
    controller: 'ProjectCtrl',
    controllerAs: 'info'
  }
})
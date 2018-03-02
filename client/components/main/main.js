angular.module('portfolio')

.directive('main', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/main/main.html'
  };
});

const observer = lozad();
observer.observe();

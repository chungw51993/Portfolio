angular.module('portfolio.main', [])

.controller('MainCtrl', function($scope) {
  $scope.greeting = 'I am a Full Stack Developer';
  $scope.about = 'I\'ve started developing because of my curiosity of how computers work and my passion for solving challenging problems. I love the idea of creating an application from scratch and seeing it come together the way you envisioned it is one of the greatest feeling in my life.'
})
.directive('main', function() {
  return {
    restrict: 'E',
    templateUrl: '/main/main.html',
    controller: 'MainCtrl',
  }
})
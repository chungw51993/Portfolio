angular.module('portfolio', [
  'ngAnimate',
  'ngTouch',
  'ngFader',
  'portfolio.main',
  'portfolio.about',
  'portfolio.cardcast',
  'portfolio.echoes',
  'portfolio.surveyscribe',
  'portfolio.contact',
  'portfolio.skills',
  'portfolio.portfolio',
  'portfolio.localseller'
])

.run(function($rootScope, $timeout) {
  $rootScope.$on('$viewContentLoaded', function() {
    $timeout(function() {
      componentHandler.upgradeAllRegistered();
    });
  });
});
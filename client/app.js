angular.module('portfolio', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ngFader',
  'portfolio.main',
  'portfolio.about',
  'portfolio.cardcast',
  'portfolio.echoes',
  'portfolio.surveyscribe',
  'portfolio.contact',
  'portfolio.skills'
])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
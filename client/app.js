angular.module('portfolio', [
  'ngRoute',
  'portfolio.main',
  'portfolio.project'
])

.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})
angular.module('portfolio.echoes', [])

.controller('EchoesCtrl', function() {
  this.project = {
    title: 'Echoes',
    description: 'A music journal app where you can record and keep track of all your music reviews',
    tech: ['PostgreSQL', 'Express', 'ReactJS', 'Nodejs'],
    url: 'echoes.wjchung.com',
    github: 'https://github.com/chungw51993/echoes'
  }

  this.images = [{
    src: '/assets/echoes/1.png',
    alt: 'Landing Page'
  }, {
    src: '/assets/echoes/2.png',
    alt: 'Feed Page - Shows your impressions and people you\'re following'
  }, {
    src: '/assets/echoes/3.png',
    alt: 'Profile Page'
  }, {
    src: '/assets/echoes/4.png',
    alt: 'Search User Page'
  }]

})
.directive('echoes', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/echoes/echoes.html',
    controller: 'EchoesCtrl',
    controllerAs: 'info'
  }
})
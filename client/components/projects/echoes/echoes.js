angular.module('portfolio.echoes', [])

.controller('EchoesCtrl', function() {
  this.project = {
    title: 'Echoes',
    description: 'Echoes is a music journal app where you can record and keep track of all your music reviews. In echoes you can follow other users in the app to see their music journal and read the reviews they left. You will have a feed page that lists recent music reviews by users you are following and your own reviews. You can also visit user\'s profile page to follow and see all their reviews.',
    tech: ['JavaScript','PostgreSQL', 'Express', 'ReactJS', 'Nodejs', 'iTunes API'],
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
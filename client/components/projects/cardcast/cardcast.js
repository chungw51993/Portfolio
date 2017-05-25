angular.module('portfolio.cardcast', [])

.controller('CardCtrl', function() {
  this.project = {
    title: 'CardCast',
    description: 'A simple chromecast tool for collaborative presentations.',
    tech: ['MongoDB', 'Express', 'AngularJS', 'Nodejs'],
    url: 'cardcast.wjchung.com',
    github: 'https://github.com/chungw51993/cardcast'
  }

  this.images = [{
    src: '/assets/cardcast/1.png',
    alt: 'Landing Page'
  }, {
    src: '/assets/cardcast/2.png',
    alt: 'Deck Page'
  }, {
    src: '/assets/cardcast/3.png',
    alt: 'New Card Page - You can use markdown to customize your card'
  }, {
    src: '/assets/cardcast/4.png',
    alt: 'Edit Card Page'
  }]

})
.directive('cardcast', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/cardcast/cardcast.html',
    controller: 'CardCtrl',
    controllerAs: 'info'
  }
})
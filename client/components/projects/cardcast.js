angular.module('portfolio')

.controller('CardCtrl', function() {
  this.project = {
    title: 'CardCast',
    description: 'CardCast is a simple chromecast application for collaborative presentations. Each user creates their deck of cards(slides) which can be customized by using markdown in the text box. You will be able to preview what your markdown will look like when you are creating your slides. Once you have a card you can cast it to your Chromecast and show it on a big screen. Anybody that is connected to the Chromecast will be able to cast their card anytime they want to. CardCast is a great tool for brainstorming session, daily standup meeting and even parties!',
    tech: ['JavaScript', 'MongoDB', 'Express', 'AngularJS', 'Nodejs', 'Google Cast SDK'],
    url: 'http://cardcast.wjchung.com',
    github: 'https://github.com/chungw51993/cardcast-original'
  };

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
  }];

})
.directive('cardcast', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'CardCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
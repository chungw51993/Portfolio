angular.module('portfolio')

.controller('PortCtrl', function() {
  this.project = {
    title: 'Personal Website',
    description: 'I created my personal website using AngularJS, Node with Express and fullpage.js plugin to create the fullpage effect on the website. I used Bootstrap for positioning and Material Design Lite components for style.',
    tech: ['JavaScript', 'AngularJS', 'Node', 'Express', 'Bootstrap', 'MDL'],
    url: 'http://portfolio.wjchung.com',
    github: 'https://github.com/chungw51993/Portfolio'
  };

  this.images = [{
    src: '/assets/portfolio/1.png',
    alt: 'Landing Page'
  }, {
    src: '/assets/portfolio/2.png',
    alt: 'About Me Page'
  }, {
    src: '/assets/portfolio/3.png',
    alt: 'Skills Page'
  }];
})
.directive('portfolio', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'PortCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
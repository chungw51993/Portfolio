angular.module('portfolio')

.controller('SpectivCtrl', function() {
  this.project = {
    title: 'Spectiv VR Platform',
    description: '',
    tech: ['JavaScript', 'React', 'Redux', 'PostgreSQL', 'Redis', 'Node', 'Express', 'Algolia'],
    url: 'https://www.spectivvr.tv',
    github: 'https://github.com/DmsChrisPena/SpectivVR-web'
  };

  this.images = [{
    src: '/assets/spectiv/1.png',
    alt: 'Home Page',
  }, {
    src: '/assets/spectiv/2.png',
    alt: 'Home Page',
  }, {
    src: '/assets/spectiv/3.png',
    alt: 'Video Page',
  }, {
    src: '/assets/spectiv/4.png',
    alt: 'Channel Page',
  }];
})
.directive('spectivvr', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'SpectivCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
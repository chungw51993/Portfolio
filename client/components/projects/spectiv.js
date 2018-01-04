angular.module('portfolio')

.controller('SpectivCtrl', function() {
  this.project = {
    title: 'Spectiv VR Platform',
    description: 'Spectiv is a decentralized and dedicated virtual reality streaming platform that is based on attention market token. The platform uses blockchain based attention market to support widespread adoption of virtual reality. The platform also utilizes blockchain integrated attention markets to supports virtual reality adoption network. Some of the main features of the platform include VR streaming of sports and events and gives users the chance to participate at home. It is community-driven, which enables users to stream videos with their VR equipment.',
    tech: ['JavaScript', 'React', 'Redux', 'PostgreSQL', 'Redis', 'Node', 'Express', 'Algolia', 'Jest'],
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
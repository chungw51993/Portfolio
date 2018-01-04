angular.module('portfolio')

.controller('SpectivCtrl', function() {
  this.project = {
    title: 'Spectiv VR Platform',
    description: 'This was the first application that I made using AngularJS. You can search for anything you want to buy and it shows you a list of sellers in the area. I am grabing the data from the craigslist so when you click go to the url it will take you to the actual post in craigslist.',
    tech: ['JavaScript', 'React', 'Redux', 'PostgreSQL', 'Redis', 'Node', 'Express', 'Algolia'],
    url: 'https://www.spectivvr.tv',
    github: 'https://github.com/DmsChrisPena/SpectivVR-web'
  };

  this.images = [{
    src: '/assets/spectiv/1.png',
    alt: 'Home Page',
  }, {

  }, {

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
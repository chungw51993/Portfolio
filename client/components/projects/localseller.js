angular.module('portfolio.localseller', [])

.controller('LocalCtrl', function() {
  this.project = {
    title: 'Local Seller Listing',
    description: 'This was the first application that I made using AngularJS. You can search for anything you want to buy and it shows you a list of sellers in the area. I am grabing the data from the craigslist so when you click go to the url it will take you to the actual post in craigslist.',
    tech: ['JavaScript', 'AngularJS', 'Nodejs', 'Express'],
    url: 'http://localseller.wjchung.com',
    github: 'https://github.com/chungw51993/localsellerlisting'
  };

  this.images = [{
    src: '/assets/localsellerlisting/1.png',
    alt: 'Main Page'
  }, {
    src: '/assets/localsellerlisting/2.png',
    alt: 'About Me Page'
  }, {
    src: '/assets/localsellerlisting/3.png',
    alt: 'Skills Page'
  }];
})
.directive('localseller', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'LocalCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
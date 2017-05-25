angular.module('portfolio.surveyscribe', [])

.controller('SurveyCtrl', function() {
  this.project = {
    title: 'SurveyScribe',
    description: 'A survey app where you can build a survey, send the link to participants, and analyze their responses.',
    tech: ['MongoDB', 'Express', 'ReactJS', 'Redux', 'Nodejs', 'Mocha/Chai'],
    url: 'surveyscribe.wjchung.com',
    github: 'https://github.com/chungw51993/surveyscribe'
  }

  this.images = [{
    src: '/assets/surveyscribe/1.png',
    alt: 'Landing Page'
  }, {
    src: '/assets/surveyscribe/2.png',
    alt: 'Surveys Page'
  }, {
    src: '/assets/surveyscribe/3.png',
    alt: 'New Survey Page'
  }, {
    src: '/assets/surveyscribe/4.png',
    alt: 'Survey Answer Page - You can share your survey by sending the url'
  }, {
    src: '/assets/surveyscribe/5.png',
    alt: 'Result Page'
  }]

})
.directive('surveyscribe', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/surveyscribe/surveyscribe.html',
    controller: 'SurveyCtrl',
    controllerAs: 'info'
  }
})
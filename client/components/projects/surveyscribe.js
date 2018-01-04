angular.module('portfolio')

.controller('SurveyCtrl', function() {
  this.project = {
    title: 'SurveyScribe',
    description: 'SurveyScribe is a survey application where you can build a survey, send the link to participants, and analyze their responses. You will be able to create a survey with multiple choice, slider, and short answer questions. You can make questions to be required and limit how many choices user can make. To share your survey all you need to do is copy the url of the answer page and anybody can get on the page to submit their answers. After you had some answers submitted you can visit the result page to see the bar graphs and list of short answers.',
    tech: ['JavaScript', 'MongoDB', 'Express', 'React', 'Redux', 'Nodejs', 'Mocha/Chai'],
    url: 'http://surveyscribe.elijahschow.com',
    github: 'https://github.com/chungw51993/surveyscribe'
  };

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
  }];

})
.directive('surveyscribe', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'SurveyCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
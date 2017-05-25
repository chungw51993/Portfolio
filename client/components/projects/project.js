angular.module('portfolio.project', [])

.controller('ProjectCtrl', function() {

  this.projects = [
    {
      title: 'CardCast',
      description: 'A simple chromecast tool for collaborative presentations.',
      images: [{
        image: '/assets/cardcast/1.png',
        text: 'Landing Page'
      }, {
        image: '/assets/cardcast/2.png',
        text: 'Deck Page'
      }, {
        image: '/assets/cardcast/3.png',
        text: 'New Card Page - You can use markdown to customize your card'
      }, {
        image: '/assets/cardcast/4.png',
        text: 'Edit Card Page'
      }],
      tech: ['MongoDB', 'Express', 'AngularJS', 'Nodejs'],
      url: 'cardcast.wjchung.com',
      github: 'https://github.com/chungw51993/cardcast'
    },
    {
      title: 'Echoes',
      description: 'A music journal app where you can record and keep track of all your music reviews',
      images: [{
        image: '/assets/echoes/1.png',
        text: 'Landing Page'
      }, {
        image: '/assets/echoes/2.png',
        text: 'Feed Page - Shows your impressions and people you\'re following'
      }, {
        image: '/assets/echoes/3.png',
        text: 'Profile Page'
      }, {
        image: '/assets/echoes/4.png',
        text: 'Search User Page'
      }],
      tech: ['PostgreSQL', 'Express', 'ReactJS', 'Nodejs'],
      url: 'echoes.wjchung.com',
      github: 'https://github.com/chungw51993/echoes'
    },
    {
      title: 'SurveyScribe',
      description: 'A survey app where you can build a survey, send the link to participants, and analyze their responses.',
      images: [{
        image: '/assets/surveyscribe/1.png',
        text: 'Landing Page'
      }, {
        image: '/assets/surveyscribe/2.png',
        text: 'Surveys Page'
      }, {
        image: '/assets/surveyscribe/3.png',
        text: 'New Survey Page'
      }, {
        image: '/assets/surveyscribe/4.png',
        text: 'Survey Answer Page - You can share your survey by sending the url'
      }, {
        image: '/assets/surveyscribe/5.png',
        text: 'Result Page'
      }],
      tech: ['MongoDB', 'Express', 'ReactJS', 'Redux', 'Nodejs', 'Mocha/Chai'],
      url: 'surveyscribe.wjchung.com',
      github: 'https://github.com/chungw51993/surveyscribe'
    }
  ]

})
.directive('project', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/project/project.html',
    controller: 'ProjectCtrl',
    controllerAs: 'info'
  }
})
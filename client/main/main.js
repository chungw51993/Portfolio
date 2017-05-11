angular.module('portfolio.main', [])

.controller('MainCtrl', function() {
  this.greeting = 'I am a Full Stack Developer';
  this.about = 'I\'ve started developing because of my curiosity of how computers work and my passion for solving challenging problems. I love the idea of creating an application from scratch and seeing it come together the way you envisioned it is one of the greatest feeling in my life.'
  this.experience = 'I have been developing using JavaScript, CSS and HTML. I have experience using AngularJS, ReactJS, MongoDB, SQL, and Nodejs with Express'
  this.projects = [
    {
      title: 'CardCast',
      description: 'A simple chromecast tool for collaborative presentations.',
      image: '/assets/cardcast.png',
      tech: ['MongoDB', 'Express', 'AngularJS', 'Nodejs'],
      url: 'cardcast.wjchung.com',
      github: 'https://github.com/chungw51993/cardcast'
    },
    {
      title: 'Echoes',
      description: 'A music journal app where you can record and keep track of all your music reviews',
      image: '/assets/echoes.png',
      tech: ['PostgreSQL', 'Express', 'ReactJS', 'Nodejs'],
      url: 'echoes.wjchung.com',
      github: 'https://github.com/chungw51993/echoes'
    },
    {
      title: 'SurveyScribe',
      description: 'A survey app where you can build a survey, send the link to participants, and analyze their responses.',
      image: '/assets/surveyscribe.png',
      tech: ['MongoDB', 'Express', 'ReactJS', 'Redux', 'Nodejs', 'Mocha/Chai'],
      url: 'surveyscribe.wjchung.com',
      github: 'https://github.com/chungw51993/surveyscribe'
    }
  ]
})
.directive('main', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/main/main.html',
    controller: 'MainCtrl',
    controllerAs: 'info'
  }
})
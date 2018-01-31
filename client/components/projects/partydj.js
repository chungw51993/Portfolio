angular.module('portfolio')

.controller('PartyCtrl', function() {
  this.project = {
    title: 'PartyDJ',
    description: 'PartyDJ is a playlist creator app where anybody with a Spotify Account can join in and add songs to the playlist. The application is real time so every user will see all the songs getting added to the playlist. The creator of the playlist can skip the songs and delete any unwanted songs but listeners also has a chance to skip the song by gonging the song.',
    tech: ['JavaScript', 'AngularJS', 'Node', 'Express', 'MySQL', 'Socket.io', ],
    url: 'https://github.com/chungw51993/PartyDJ',
    github: 'https://github.com/chungw51993/PartyDJ',
  };

  this.images = [{
    src: '/assets/partydj/1.png',
    alt: 'Landing Page'
  }, {
    src: '/assets/partydj/2.png',
    alt: 'Main Page'
  }, {
    src: '/assets/partydj/3.png',
    alt: 'Playlist Page',
  }, {
    src: '/assets/partydj/4.png',
    alt: 'Song Search',
  }];
})
.directive('partydj', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'PartyCtrl',
    controllerAs: 'info',
    bindToController: true
  };
});
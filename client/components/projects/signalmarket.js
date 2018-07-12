angular.module('portfolio')

.controller('SignalCtrl', function() {
  this.project = {
    title: 'Signal Marketplace',
    description: 'The Signal Marketplace is the advertising platform built for the decentralized web. Using the Signal Marketplace, advertisers can list their offerings to a network of attention influencers. Once an offering is listed, attention influencers are able to generate a personalized affiliate link that directs to the advertiser\'s offering. Every time this attention influencer drives a click or sale through their unique link, they are rewarded in Signal Tokens (SIG) directly from the advertiser through a smart contract.',
    tech: ['JavaScript', 'React', 'Redux', 'PostgreSQL', 'Sequelize', 'Redis', 'Node', 'Express'],
    url: 'https://signalmarket.io',
  };

  this.images = [{
    src: '/assets/signal/1.png',
    alt: 'Home Page',
  }, {
    src: '/assets/signal/2.png',
    alt: 'Home Page',
  }, {
    src: '/assets/signal/3.png',
    alt: 'Detail Page',
  }, {
    src: '/assets/signal/4.png',
    alt: 'Profile Page',
  }];
})
.directive('signalmarket', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: '/components/projects/project.html',
    controller: 'SignalCtrl',
    controllerAs: 'info',
    bindToController: true,
  };
});

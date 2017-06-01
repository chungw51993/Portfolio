angular.module('portfolio.contact', [])

.controller('ContactCtrl', function() {
  this.name;
  this.email;
  this.subject;
  this.message;

  this.handleSubmit = function() {
    let message = {
      from_name: this.name,
      from_email: this.email,
      subject: this.subject,
      message_html: this.message
    }
    emailjs.send('jin_sgmail', 'jin_stemplate', message)
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
})
.directive('contact', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/contact/contact.html',
    controller: 'ContactCtrl',
    controllerAs: 'info',
    bindToController: true
  }
})
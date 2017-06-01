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
      .then((response) => {
        console.log('SUCCESSFUL: ', response);
      }, (error) => {
        console.error("FAILED TO SEND: ", error);
      })
    let snackbarContainer = document.querySelector('#snackbar');
    let data = {
      message: 'Thank you for sending me a message!',
      timeout: 2000,
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
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
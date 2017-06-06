angular.module('portfolio.contact', ['ngSanitize'])

.controller('ContactCtrl', function($sanitize) {
  this.name = '';
  this.email = '';
  this.subject = '';
  this.message = '';

  this.handleSubmit = function() {
    let snackbarContainer = document.querySelector('#snackbar');
    let data = {
      message: 'You didn\'t fill out the form completely.',
      timeout: 2000
    }

    if (this.name !== '' || this.email !== '' || this.subject !== '' || this.message !== '') {
      let message = {
        from_name: $sanitize(this.name),
        from_email: $sanitize(this.email),
        subject: $sanitize(this.subject),
        message_html: $sanitize(this.message)
      }
      emailjs.send('jin_sgmail', 'jin_stemplate', message)
      let data = {
        message: 'Thank you for sending me a message!',
        timeout: 2000
      };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    } else {
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
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
/**
* PHP Email Form Validation - v3.10
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.php-email-form');
  const loadingDiv = document.querySelector('.php-email-form .loading');
  const sentMessageDiv = document.querySelector('.sent-message');

  if (!form) {
    console.error('Form with class "php-email-form" not found in the DOM.');
    return; // Exit if form is not found
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    loadingDiv.style.display = 'block';
    sentMessageDiv.style.display = 'none';
    loadingDiv.classList.add('loading-active');
    loadingDiv.classList.remove('loading-inactive');

    const loadingTimeout = setTimeout(function() {
      loadingDiv.style.display = 'none';
      loadingDiv.classList.remove('loading-active');
      loadingDiv.classList.add('loading-inactive');
      alert('Oops! It seems like the submission is taking longer than expected. Please check your internet connection.');
    }, 10000);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        clearTimeout(loadingTimeout);
        loadingDiv.style.display = 'none';
        loadingDiv.classList.remove('loading-active');
        sentMessageDiv.style.display = 'block';
        form.reset();
      })
      .catch(error => {
        clearTimeout(loadingTimeout);
        loadingDiv.style.display = 'none';
        loadingDiv.classList.remove('loading-active');
        alert('There was an error sending your message. Please try again.');
      });
  });
});



 
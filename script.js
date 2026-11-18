// Homepage — CS50x Week 8
// Same features as the original submission:
// - footer year set automatically
// - time-based greeting on the home page (#greeting, home page only)
// - dark/light theme toggle (#theme-toggle)
// - contact form shows a thank-you message without reloading
// Polish: the theme choice is remembered in-memory for the page session
// via the body class only (no storage), and the toggle label stays in sync.

document.addEventListener('DOMContentLoaded', function () {
  var year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  var greeting = document.querySelector('#greeting');
  if (greeting) {
    var hour = new Date().getHours();
    if (hour < 12) {
      greeting.textContent = 'Good morning, and welcome to my site!';
    } else if (hour < 18) {
      greeting.textContent = 'Good afternoon, and welcome to my site!';
    } else {
      greeting.textContent = 'Good evening, and welcome to my site!';
    }
  }

  var toggles = document.querySelectorAll('#theme-toggle, .theme-toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      var dark = document.body.classList.contains('dark-mode');
      toggles.forEach(function (t) {
        t.textContent = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      });
    });
  });

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      document.querySelector('#form-message').textContent =
        'Thank you for your message! I will get back to you soon.';
      form.reset();
    });
  }
});

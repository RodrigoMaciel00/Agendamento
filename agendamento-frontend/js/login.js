document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Simulate authentication
      if (username === 'admin' && password === '123') {
          window.location.href = 'admin.html';
      } else {
          alert('Username or password is incorrect');
      }
  });
});

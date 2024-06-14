document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Autenticação básica (credenciais fixas para exemplo)
  if(username === 'admin' && password === 'admin123') {
    window.location.href = 'admin.html';
  } else {
    alert('Credenciais inválidas!');
  }
});

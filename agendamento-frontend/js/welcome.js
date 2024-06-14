document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');
  
    document.getElementById('user-name').textContent = userName;
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const scheduleForm = document.getElementById('scheduleForm');
  
    scheduleForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const service = document.getElementById('service').value;
      const petName = document.getElementById('pet_name').value;
  
      if (!validateDate(date) || !validateTime(time)) {
        alert('Por favor, insira uma data e hora válidas.');
        return;
      }
  
      // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
  
      // Redireciona para a página de confirmação de agendamento
      window.location.href = `confirmation.html?date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&service=${encodeURIComponent(service)}&pet=${encodeURIComponent(petName)}`;
    });
  
    function validateDate(date) {
      const today = new Date().toISOString().split('T')[0];
      return date >= today;
    }
  
    function validateTime(time) {
      const re = /^([0-1]\d|2[0-3]):([0-5]\d)$/;
      return re.test(time);
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
  const appointmentsContainer = document.getElementById('appointments');

  // Simulating fetching data from an API
  const appointments = [
      { id: 1, date: '2024-06-01', time: '10:00', service: 'Consulta', petName: 'Rex' },
      { id: 2, date: '2024-06-02', time: '14:00', service: 'Vacinação', petName: 'Bella' },
      { id: 3, date: '2024-06-03', time: '09:00', service: 'Raio-X', petName: 'Luna' }
  ];

  function renderAppointments() {
      appointmentsContainer.innerHTML = '';
      appointments.forEach(appointment => {
          const appointmentElement = document.createElement('div');
          appointmentElement.classList.add('appointment');
          appointmentElement.innerHTML = `
              <p><strong>Data:</strong> ${appointment.date}</p>
              <p><strong>Hora:</strong> ${appointment.time}</p>
              <p><strong>Serviço:</strong> ${appointment.service}</p>
              <p><strong>Nome do Pet:</strong> ${appointment.petName}</p>
          `;
          appointmentsContainer.appendChild(appointmentElement);
      });
  }

  renderAppointments();
});

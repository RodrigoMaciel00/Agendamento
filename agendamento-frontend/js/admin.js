document.addEventListener('DOMContentLoaded', function() {
  const appointments = [
    { date: '2024-06-14', time: '10:00', patient: 'John Doe', pet: 'Rex' },
    { date: '2024-06-14', time: '11:00', patient: 'Jane Smith', pet: 'Whiskers' }
  ];

  const appointmentContainer = document.getElementById('appointments');

  appointments.forEach(appointment => {
    const appointmentDiv = document.createElement('div');
    appointmentDiv.classList.add('appointment');
    appointmentDiv.innerHTML = `
      <p><strong>Data:</strong> ${appointment.date}</p>
      <p><strong>Hora:</strong> ${appointment.time}</p>
      <p><strong>Paciente:</strong> ${appointment.patient}</p>
      <p><strong>Pet:</strong> ${appointment.pet}</p>
    `;
    appointmentContainer.appendChild(appointmentDiv);
  });
});

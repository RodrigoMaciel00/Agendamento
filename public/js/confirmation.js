document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const appointmentDate = urlParams.get('date');
    const appointmentTime = urlParams.get('time');
    const appointmentService = urlParams.get('service');
    const petName = urlParams.get('pet');

    document.getElementById('appointment-date').textContent = appointmentDate;
    document.getElementById('appointment-time').textContent = appointmentTime;
    document.getElementById('appointment-service').textContent = appointmentService;
    document.getElementById('pet-name').textContent = petName;
});

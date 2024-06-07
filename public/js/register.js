document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        const phone = document.getElementById('phone').value;
        if (!validatePhone(phone)) {
            alert('Por favor, insira um número de celular válido.');
            return;
        }

        const userName = document.getElementById('owner_name').value;

        // Aqui você pode adicionar a lógica para salvar os dados no banco de dados

        // Redireciona para a página de bem-vindo
        window.location.href = `welcome.html?name=${encodeURIComponent(userName)}`;
    });

    function validatePhone(phone) {
        const re = /^[0-9]{11}$/;
        return re.test(String(phone));
    }
});

document.getElementById('form').addEventListener('submit', function(event) { 
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(!email || !password || !confirmPassword) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)) {
        alert('Por favor, insira um email válido.')
        return;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passwordPattern.test(password)) {
        alert('A senha deve ter pelo menos 8 caracteres, incluindo um número e uma letra maiúscula.');
        return;
    }

    if(password !== confirmPassword) {
        alert('A senha e a confirmação de senha não correspondem.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    document.getElementById('form').submit();
});
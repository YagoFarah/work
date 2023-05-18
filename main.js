
        const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            
            if (firstName === '') {
                document.getElementById('firstName').style.borderColor = 'red';
                alert('Por favor, preencha o campo Primeiro Nome');
                return;
            }

            if (lastName === '') {
                document.getElementById('lastName').style.borderColor = 'red';
                alert('Por favor, preencha o campo Segundo Nome');
                return;
            }

            if (email === '') {
                document.getElementById('email').style.borderColor = 'red';
                alert('Por favor, preencha o campo Email');
                return;
            }

            if (password === '') {
                document.getElementById('password').style.borderColor = 'red';
                alert('Por favor, preencha o campo Senha');
                return;
            }

            if (confirmPassword === '') {
                document.getElementById('confirmPassword').style.borderColor = 'red';
                alert('Por favor, preencha o campo Confirme sua Senha');
                return;
            }

            if (password !== confirmPassword) {
                alert('As senhas não coincidem');
                return;
            }

            alert('Formulário enviado com sucesso!');
            
        });
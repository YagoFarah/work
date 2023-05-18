const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const form = document.getElementById('myForm');

        firstNameInput.addEventListener('input', validateFirstName);
        lastNameInput.addEventListener('input', validateLastName);
        emailInput.addEventListener('input', validateEmail);
        passwordInput.addEventListener('input', validatePassword);
        confirmPasswordInput.addEventListener('input', validateConfirmPassword);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
        });

        function validateFirstName() {
            const value = firstNameInput.value;
            if (value === '') {
                firstNameInput.style.borderColor = 'red';
            } else {
                firstNameInput.style.borderColor = '';
            }
        }

        function validateLastName() {
            const value = lastNameInput.value;
            if (value === '') {
                lastNameInput.style.borderColor = 'red';
            } else {
                lastNameInput.style.borderColor = '';
            }
        }

        function validateEmail() {
            const value = emailInput.value;
            if (value === '') {
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '';
            }
        }

        function validatePassword() {
            const value = passwordInput.value;
            if (value === '') {
                passwordInput.style.borderColor = 'red';
            } else {
                passwordInput.style.borderColor = '';
            }
        }

        function validateConfirmPassword() {
            const passwordValue = passwordInput.value;
            const confirmPasswordValue = confirmPasswordInput.value;
            if (confirmPasswordValue === '' || confirmPasswordValue !== passwordValue) {
                confirmPasswordInput.style.borderColor = 'red';
            } else {
                confirmPasswordInput.style.borderColor = '';
            }
        }
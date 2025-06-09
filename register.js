document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve and trim inputs
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        if (!isValid) {
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#ffbaba';
            feedbackDiv.style.color = '#d8000c';
            feedbackDiv.innerHTML = messages.join('<br>');
        } else {
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#dff2bf';
            feedbackDiv.style.color = '#4f8a10';
            feedbackDiv.innerHTML = 'Registration successful!';
            form.reset();
        }
    });
});

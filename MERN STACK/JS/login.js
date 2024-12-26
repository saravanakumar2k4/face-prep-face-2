document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get email and password values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate email and password
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!passwordPattern.test(password)) {
            alert('Password must be at least 8 characters long and include letters, numbers, and symbols.');
            return;
        }

        // If everything is correct, proceed with login (this is just a demo, you can add further logic for actual authentication)
        alert('Login successful!');
        // Here you can add the code to handle authentication (e.g., API call)
    });

    // Google login (just a button for demonstration purposes)
    const googleLoginBtn = document.getElementById('googleLoginBtn');
    googleLoginBtn.addEventListener('click', function() {
        alert('Redirecting to Google login...');
        // In a real app, you'd integrate with Google OAuth API for login.
    });
});

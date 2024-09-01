document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');

    // Check for existing user data in local storage
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        existingButton.style.display = 'inline';
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameField.value;
        const password = passwordField.value;
        const rememberMe = checkbox.checked;

        if (rememberMe) {
            // Save username and password in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove username and password from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        // Show alert with login message
        alert(`Logged in as ${username}`);
    });

    // Handle existing user login
    existingButton.addEventListener('click', () => {
        const savedUsername = localStorage.getItem('username');
        alert(`Logged in as ${savedUsername}`);
    });
});

//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');

    // Check for existing user data in local storage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.display = 'inline';
    }

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

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

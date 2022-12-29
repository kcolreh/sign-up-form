confirmPassword();

function confirmPassword() {
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('confirm-password').value;
    let passwordStatus = document.getElementById('password-status');

    if (password === '') {
        passwordStatus.style = 'color: red';
        passwordStatus.textContent = 'Please enter matching passwords';
    } else if (password === password2) {
        document.getElementById('confirm-password').style.borderColor = 'green';
        document.getElementById('password').style.borderColor = 'green';
        passwordStatus.style = 'color: green';
        passwordStatus.textContent = 'Passwords match';
    } else {
        passwordStatus.style = 'color: red';
        passwordStatus.textContent = 'Passwords do not match';
    }
}
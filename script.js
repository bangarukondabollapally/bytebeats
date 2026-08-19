const form = document.querySelector("form");

const nameInput = document.querySelector('input[placeholder="Enter Name"]');
const emailInput = document.querySelector('input[placeholder="Enter Email"]');
const phoneInput = document.querySelector('input[placeholder="Enter Phone Number"]');
const passwordInput = document.querySelector('input[placeholder="Create Password"]');
const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Regular Expressions
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

    // Name validation
    if (name === "") {
        alert("Name cannot be empty");
        nameInput.focus();
        return;
    }

    if (!nameRegex.test(name)) {
        alert("Name should contain only letters and spaces");
        nameInput.focus();
        return;
    }

    // Email validation
    if (email === "") {
        alert("Email cannot be empty");
        emailInput.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email address");
        emailInput.focus();
        return;
    }

    // Phone validation
    if (phone === "") {
        alert("Phone number cannot be empty");
        phoneInput.focus();
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        phoneInput.focus();
        return;
    }

    // Password validation
    if (password === "") {
        alert("Password cannot be empty");
        passwordInput.focus();
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 8 characters and one number");
        passwordInput.focus();
        return;
    }

    // Confirm password
    if (confirmPassword === "") {
        alert("Please confirm your password");
        confirmPasswordInput.focus();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        confirmPasswordInput.focus();
        return;
    }

    alert("Registration successful!");
});
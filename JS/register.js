const form = document.forms['loginForm'];
if (form) {
    form.addEventListener('submit', loginForm);
}
function loginForm(event) {
    let valid = true;
    let errorinfo = "";
    if (form.username.value === "") {
        valid = false;
        errorinfo = "Username is empty";
    }
    else if (form.password.value === "") {
        valid = false;
        errorinfo = "Password is empty"
    }
    if (!valid) {
        alert(errorinfo);
        event.preventDefault();
    } else if (valid) {
        alert("Login successfully!Welcome to our website!")
        event.preventDefault();
        window.location.href = 'index.html';
    }
}
const form1 = document.forms['registrationForm'];
if (form1) {
    form1.addEventListener('submit', registrationForm);
}
function registrationForm(event) {
    let valid = true;
    let errorinfo = "";
    var password = document.getElementById("regPassword").value;
    var passwordLength = password.length;
    alert(typeof passwordLength);

    var jug = /[A-Z]/.test(password);
    if (form1.regUsername.value === "") {
        valid = false;
        errorinfo = "Username is empty";
    } else if (form1.email.value === "") {
        valid = false;
        errorinfo = "Email is empty";
    } else if (form1.regPassword.value === "") {
        valid = false;
        errorinfo = "Password is empty";
    } else if (form1.confirmPassword.value != form1.regPassword.value) {
        valid = false;
        errorinfo = "Please confirm your password";
    } else if (!jug) {
        valid = false;
        errorinfo = "The password must contain a capital letter"
    } else if (passwordLength < 8 || passwordLength > 20) {
        valid = false;
        errorinfo = "The password length must be between 8 and 20 characters"
    }
    if (!valid) {
        alert(errorinfo);
        event.preventDefault();
    } else if (valid) {
        alert("Register successfully!Welcome to our website!");
        event.preventDefault();
        window.location.href = "index.html";
    }
}
function resetForm() {

    location.reload();
}

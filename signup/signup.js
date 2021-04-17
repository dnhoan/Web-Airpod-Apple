var username = document.getElementById('username')
var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirm-password')
var rememberPassword = document.getElementById('remember-password')
var signUp = document.getElementById('sign-up')

signUp.onclick = function() {
    if (username.value.trim() == '') {
        alert('Not input username')
        return false
    }
    if (password.value.trim() == '') {
        alert('Not input password')
        return false
    }
    if (confirmPassword.value.trim() !== password.value.trim()) {
        alert('Error confirm password')
        return false
    }
    if(!rememberPassword.checked) {
        alert('Not accept a term')
        return false
    }
    alert('Create account success')
    event.preventDefault()
    window.location.replace("../login/login.html")
    return true
}
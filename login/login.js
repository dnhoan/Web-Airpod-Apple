var user = document.getElementById('user')
 
var password = document.getElementById('password')

var signIn = document.getElementById('sign-in')

signIn.onclick = function() {
    if (user.value.trim() == "" ){
        alert("Not input username")
        return false;
    }
    if (password.value.trim() == "" ){
        alert("Not input password")
        return false;
    }
    alert('Log in success')
    event.preventDefault();
    window.location.replace("../home/asm.html");
    return true
    
}
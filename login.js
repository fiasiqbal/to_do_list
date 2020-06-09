function validateForm(callback) {
    let username = document.getElementById("username");
    let pwd = document.getElementById("pwd");
    
    if (username.value == "admin" && pwd.value == "12345") {
        callback();
        alert("You are now logged in");
    } else if (username.value == "" || pwd.value == "") {
        alert("All fields are required");
        return false;
    }
    else {
        alert("Danger");
        return false;
    }
}

function redirect() {
    location.replace("home.html");
    // window.location = "home.html";
}
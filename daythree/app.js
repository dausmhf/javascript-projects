// Set Username and Password variables

let username;
let password;

// Get the username and password input fields from the DOM
username = document.getElementById("username");
password = document.getElementById("password");

let user1 = {name: "Daus", usernameUser1: "daus", passwordUser1: "daus123"};
let user2 = {name: "Adit", usernameUser2: "adit", passwordUser2: "adit123"};

// Get the login button from the DOM
let loginButton = document.getElementById("login"); 
// Add an event listener to the login button
loginButton.addEventListener("click", function() {
    // Check if the entered username and password match user1 or user2 
    if ((username.value === user1.usernameUser1 && password.value === user1.passwordUser1) ||
        (username.value === user2.usernameUser2 && password.value === user2.passwordUser2)) {
        // If they match, display a welcome message with the user's name   
        alert("Login success!");
    } else {
        // If they don't match, display an error message
        let welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = "Invalid username or password. Please try again.";
    }  
});


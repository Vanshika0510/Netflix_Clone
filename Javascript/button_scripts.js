const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// script for get started button
document.getElementById("email_input").addEventListener("input", function() {
    var emailInput = document.getElementById("email_input");
    var getStartedButton = document.getElementById("getstarted_btn");
    
    const isValid = emailPattern.test(emailInput);
    if (isValid!=true && emailInput.value.trim() !== "") {
        getStartedButton.disabled=false;
    } else {
        getStartedButton.disabled = true;
    }
});

document.getElementById("User_detail").addEventListener("submit", function(event) {
    event.preventDefault();
    var emailInput = document.getElementById("email_input");
    var email = emailInput.value;
    if(emailPattern.test(email))
        alert("Email is Valid: " + email); 
    else
    {
        alert("Email is Invalid: "+ email);
    }
    emailInput.value = ""; 
    document.getElementById("getStartedButton").disabled = true;
});
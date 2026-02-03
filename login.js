//login section
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const savedMobileNumber = "01666"
    const savedPinNumber = "1234";

    const userMobileNumber = document.getElementById('user-mobile-number').value;
    const userPin = document.getElementById('user-pin').value;

    // console.log(userMobileNumber, userPin);

    if(userMobileNumber == savedMobileNumber && userPin == savedPinNumber){
        window.location.href = 'home.html';
    }
    else{
        alert(`Invalid Credentials. Use ${savedMobileNumber} as mobile number and ${savedPinNumber} as 4 digit PIN`);
    }
})
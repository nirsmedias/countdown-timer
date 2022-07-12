function acceptedcharsonly() {
    var phoneNumber = document.getElementById("phone-number").value;
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRegex.test(phoneNumber);
    if(phoneResult == false) {
    alert('Please enter a valid phone number');
    return false;
    }
}
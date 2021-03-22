//* When the user clicks the Generate Password button
//* a prompt window is generated that asks for lenght of passwork 8-126 characters; when length is entered'
//* confirm window is generated Lowercase to be used Yes or No;
//* confirm window is generated Uppercase to be used Yes or No;
//* confirm Window is generated numbers to be used Yes or No;
//* confirm Window is generated Symbols to be used Yes or No;
//* from data given, random passwork is generated;
//* password shown in password box

var submitButtonElement = document.querySelector('#generatepassword');
var submissionResponseEl = document.querySelector('#password');

// ask for length
var length = prompt("How many characters long will your password be? Enter a number between 8-126");

//ask if Lowercase will be used
var charType = prompt("Will Lowercase be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Uppercase be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Numbers be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Symbols be used? Press Ok for yes, cancel for no.");
function functionGeneratePassword(clickEventObject) {
    clickEventObject.preventDefault();
}
// generate password
function generatePassword() {
    //evaluate character type
    var charSet = "";
    if( charType.toLowerCase === "Lowercase") {
        charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if( charType.toLowerCase === "Uppercase" ) {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if( charType.toLowerCase === "Numbers" ) {
        charSet = "0123456789";
    } else if( charType.toLowerCase === "Symbols") {
        charSet = " !\#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
    }
    // return value
    var retVal ="";
    //for (var i = 0, n = charSet.length; i < length; i++) {
    for (var i = 0, n = length; i < length; i++) {
        //picks a character within charSet at index of random number
        retVal += charSet.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal)
    return retVal;
    }
    alert(generatePassword());
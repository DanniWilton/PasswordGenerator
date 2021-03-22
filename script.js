//* When the user clicks the Generate Password button
//* a prompt window is generated that asks for lenght of passwork 8-126 characters; when length is entered'
//* confirm window is generated Lowercase to be used Yes or No;
//* confirm window is generated Uppercase to be used Yes or No;
//* confirm Window is generated numbers to be used Yes or No;
//* confirm Window is generated Symbols to be used Yes or No;
//* from data given, random passwork is generated;
//* password shown in password box
const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeLowercaseElement = document.getElementById
('includeLowercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById ('passwordGeneratorForm')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

var submitButtonElement = document.querySelector('#generatepassword');
var submissionResponseEl = document.querySelector('#password');

// ask for length
const aNumber = Number(window.prompt("Type a number between 8-126 for your password length", ""));
var charType = prompt("Will Lowercase be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Uppercase be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Numbers be used? Press Ok for yes, cancel for no.");
var charType = prompt("Will Symbols be used? Press Ok for yes, cancel for no.");

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmountNumber = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmountNumber, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeSymbolsElement, includeLowercase, includeNumbers, includeSymbols) {
    console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// generate password
function generatePassword() {
    //evaluate character type
    var charSet = "";
    if( charType.includeLowercase === "Lowercase") {
        charSet = "abcdefghijklmnopqrstuvwxyz";
    } else if( charType.includeUppercase === "Uppercase" ) {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if( charType.includeNumbers === "Numbers" ) {
        charSet = "0123456789";
    } else if( charType.includeSymbols === "Symbols") {
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

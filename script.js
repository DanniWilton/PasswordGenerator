// When Generate Password button is clicked, prompt function appear
// prompt box appears 'Select how many characters from 8-128?' 
// confirm box asks 'include lowercase characters?'
// confirm box asks 'include uppercase characters?'
// confirm box asks 'include numeric characters?'
// confirm box asks 'include symbols?'

const lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const upperCaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]
const symbolCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","/","?",".",">",",","<","'",";",":","|"];

var generateBtn = document.querySelector("#generate");

// Prompt user for password options function
function getPasswordOptions () {
  let length = prompt("Select how many characters from 8-128")

  let hasLowerCase = confirm("Would you like lowercase characters?")

  let hasUpperCase = confirm("Would you like uppercase characters?")

  let hasNumericCharacters = confirm("Would you like Numeric Characters?")

  let hasSymbolCharacters = confirm("Would you like Symbols?")

  let passwordOptions = {}

  passwordOptions.passwordLength = length
  passwordOptions.hasLowerCase = hasLowerCase
  passwordOptions.hasUpperCase = hasUpperCase
  passwordOptions.hasNumericCharacters = hasNumericCharacters
  passwordOptions.hasSymbolCharacters = hasSymbolCharacters

  return passwordOptions
}

// generate password from options selected
function generatePassword() {
  let passwordOptions = getPasswordOptions()
console.log("object",passwordOptions)
  let password = [];
  let possibleCharacters = [];

  if (passwordOptions.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
  }
  console.log("possible characters array ", possibleCharacters)

  if (passwordOptions.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
  }
  console.log("possible characters array ", possibleCharacters)

  if (passwordOptions.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
  }
  console.log("possible characters array ", possibleCharacters)

  if (passwordOptions.hasSymbolCharacters) {
    possibleCharacters = possibleCharacters.concat(symbolCharacters)
  }
    console.log ("password options. password length", passwordOptions.passwordLength)
    console.log("possible characters array ", possibleCharacters)
    var length = passwordOptions.passwordLength

    console.log ("length", length)

    for(var i = 0; i < length; i++) {
        var randomnumber = Math.floor(Math.random() * possibleCharacters.length);
        password[i]= possibleCharacters[randomnumber]
    }
    console.log (password )
  return password.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 

const lowerCaseCharacters = ["a","b","c","d","e"] 
const upperCaseCharacters = ["A","B","C","D","E"]
const numericCharacters = ["0"]
const symbolCharacters = ["!"];

var generateBtn = document.querySelector("#generate");

// Prompt user for password options function
function getPasswordOptions () {
  let length = prompt('How many characters would you like your password to contain?')

  let hasLowerCase = confirm("Would you like lowercase characters?")

  let hasUpperCase = confirm("Would you like uppercase characters?")

  let hasNumericCharacters = confirm("Would you like Numeric Characters?")

  let hasSymbolCharacters = confirm("Would you like Symbols?")

  let passwordOptions = {}

  passwordOptions.pwdLen = length
  passwordOptions.hasLowerCase = hasLowerCase
  passwordOptions.hasUpperCase = hasUpperCase
  passwordOptions.hasNumericCharacters = hasNumericCharacters
  passwordOptions.hasSymbolCharacters = hasSymbolCharacters

  return passwordOptions
}

function generatePassword() {
  let passwordOptions = getPasswordOptions()
console.log("object",passwordOptions)
  let password = [];
  let possibleCharacters = [];

  if (passwordOptions.hasLowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
  }
  console.log("possible characters array ", possibleCharacters)

  if (passwordOptions.hasUpperCase === true) {
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

  console.log("possible characters array ", possibleCharacters)
  for (let i = 0; 1 < passwordOptions.length; i++){
    password.push(Math.floor(Math.random() * possibleCharacters.length))
  }
console.log("password", password)
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

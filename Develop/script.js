// Assignment code here
function promptCritera() {
  var min = window.prompt("minimum number of characters?")
  var max = window.prompt("maximum number of characters?")
  var uppercase = window.confirm("You want uppercase letters?")
  var lowercase = window.confirm("you want lowercase letters?")
  var numbers = window.confirm("you want numbers?")
  var specialcase = window.confirm("you want special characters?")
  return generatePassword(min, max, uppercase, lowercase, numbers, specialcase)
}


//my math for finding my

function randomWholeNumber(min, max) {
  var bounds = max - min
  var decimal = Math.random()
  var rand = min + Math.floor(decimal * bounds)
  return rand
}

function generatePassword(min, max, useUppercase, useLowercase, useSpecial, useNumbers){
var password = ""

//let min = 8
//let max = 

let length = randomWholeNumber(min, max)

var options = []

if (useLowercase) {
  let offset = 97 //97=a
  for (let i = 0; i < 26; i++) 
  { //26 letters in the alphabet, a starts at 97
    options.push(String.fromCharCode(offset + i))
  }
}

if (useUppercase) {
  let offset = 97
  for (let i = 0; i < 26; i++) {
    options.push(String.fromCharCode(offset + i).toUpperCase) //forced to be uppercase
  }
}

if(useSpecial){
  //let x of 'abc' goes through each letter
  for(let specialChar of '!@#$%^&*()_-+'){
    options.push(specialChar)
  }
}

if(useNumbers){
  //another for...of loop
  for(let number of '0123456789'){
    options.push(number)
  }
}

for(let i = 0; i < length; i++) {
  //has array options, needs random characters in options
  let index = randomWholeNumber(0, options.length)
  let char = options[index]
  password = password + char
}
return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


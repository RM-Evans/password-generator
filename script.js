// Assignment code here
function promptCritera() {
  // var min = window.prompt("minimum number of characters?")
  // var max = window.prompt("maximum number of characters?")
  var length = window.prompt("Choose length of password between 8 and 128 characters")
  //yell at me IF above or below numbers
  if(length < 8 || length > 128) {

    window.alert("NO! BAD! PICK A NUMBER BETWEEN 8 AND 128")
    return promptCritera();
    // //resets and runs through uppercase to specialcase twice?????

  }
  var uppercase = window.confirm("You want uppercase letters?")
  var lowercase = window.confirm("you want lowercase letters?")
  var numbers = window.confirm("you want numbers?")
  var specialcase = window.confirm("you want special characters?")
  generatePassword(length, uppercase, lowercase, numbers, specialcase)
}


//my math for finding my random number

function randomWholeNumber(min, max) {
  var bounds = max - min
  var decimal = Math.random()
  var rand = min + Math.floor(decimal * bounds)
  return rand
}

function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecial){
var password = ""

//fixed: were passed through as a string, caused randomWholeNumber to return as a string
//max-min were not defined as strings so it couldnt do the math bc not numbers
//  min = parseInt(min);
//  max = parseInt(max);

length = parseInt(length)

// let length = randomWholeNumber(min, max)

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
    options.push(String.fromCharCode(offset + i).toUpperCase()) //forced to be uppercase
  }
}

if(useSpecial){
  //let x of 'abc' goes through each letter
  for(let specialChar of '!@#$%^&*()_-+'){
    options.push(specialChar)
  }
}

if(useNumbers){
  //debugger;
  //another for...of loop
  for(let number of '0123456789'){
    options.push(number)
  }
}

console.log(length);

for(let i = 0; i < length; i++) {
  //has array options, needs random characters in options
  let index = randomWholeNumber(0, options.length)
  let char = options[index]
  password = password + char
}
writePassword(password);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//[object mouse event]
generateBtn.addEventListener("click", promptCritera);


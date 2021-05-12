// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLengthInput = document.querySelector("#password_length");

var passArray = [];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];
var numbChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];



function userInput() {
  var length = prompt ("How many characters between 8-128?")
  if (isNaN(length)){
    alert("Password length must be a number");
    return;
  }
  if (length<8 || length>128){
    alert("Length must be between 8 and 128");
    return;
  }
  var userSpecial = confirm ("Do you want special characters?")
  var userNumbers = confirm ("Do you want number characters?")
  var userLower = confirm ("Do you want lower characters?")
  var userUpper = confirm ("Do you want upper characters?")
  if(userSpecial === false && userNumbers === false && userLower === false && userUpper === false) {
    alert ("Password must contain one character type");
    return;
  } 
  var userChoice = {
    length: length,
    userSpecial: userSpecial,
    userNumbers: userNumbers,
    userLower: userLower,
    userUpper: userUpper
  };

  return userChoice;
  
}

// Function to generate password with user input
function generatePassword() {
  var options = userInput();
  // Variable to store password as it’s being concatenated
  var result = [];
  // Array to store types of characters to include in password
  var possibleCharacters = [];
  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];
  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.userSpecial) {
    possibleCharacters = possibleCharacters.concat(specialChars);
    guaranteedCharacters.push(getRandom(specialChars));
  }
  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.userNumbers) {
    possibleCharacters = possibleCharacters.concat(numbChars);
    guaranteedCharacters.push(getRandom(numbChars));
  }
  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.userLower) {
    possibleCharacters = possibleCharacters.concat(lowerChars);
    guaranteedCharacters.push(getRandom(lowerChars));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.userUpper) {
    possibleCharacters = possibleCharacters.concat(upperChars);
    guaranteedCharacters.push(getRandom(upperChars));
  }
  // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters)
    result.push(possibleCharacter);
  }
  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
  }
  // Transform the result into a string and pass into writePassword
  return result.join("");
}
function getRandom(array){
  var random = Math.floor(Math.random() * array.length);
  var randomEl = array[random];
  return randomEl;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validatePasswordLength(passwordLength) {

}
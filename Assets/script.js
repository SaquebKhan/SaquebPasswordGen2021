// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLengthInput = document.querySelector("#password_length");

// Write password to the #password input
function writePassword() {
  var passwordLength = passwordLengthInput.value;
   var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVZWXY"
   var num = '0123456789'
   var sym = '!@#$%^&*=-_';

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function validatePasswordLength(passwordLength) {

}

function generatePassword() {
  var length = 15,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+:',./?",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

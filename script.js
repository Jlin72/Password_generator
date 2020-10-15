// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array containing numbers from 0 to 1
var number = ["0","1","2","3","4","5","6","7","8","9"];
// Array containing letters from A to Z in uppercase
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",];
// Array containing letters from a to z in lowercase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z",];
// Array containing the special characters for the password
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// This variable is used for the concanation of the variables later
var choices;

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {
  // This next line of code is used to tell the user to add a value, and if they don't add a correct value. They will be reminded.
  var passwordLength = prompt("How long would you like your password to be? Choose between 8 to 128 characters.");
  if (!passwordLength) {alert("Please add a value");} else if (passwordLength <8 || passwordLength > 128) {prompt ("Please add a value higher than 8 or lower than 128");
  } else {
    // This next line of code is used to ask the user how they would like their password to be like.
    var passwordNumber = confirm("Do you want numbers?");
    var passwordChar = confirm("Do you want special characters?");
    var passwordUpper = confirm("Do you want upper case characters?");
    var passwordLower = confirm("Do you want lower case characters?");
    }
  // This next line of code is used in case no option has been chosen for the password generator
  if (!passwordNumber && !passwordChar && !passwordUpper  && !passwordLower) {alert("Please choose a criteria");}
  // These line of code is if the user selects the all the options available for the password
  else if (passwordNumber && passwordChar && passwordUpper && passwordLower) {choices = spChar.concat (number, upperCase, lowerCase);}
  
  // These next lines of code are in case the user selects only 3 different combinations for their password
    // This first combination is if the user wants their password to have a number, special character and upper cases.
  else if (passwordNumber && passwordChar && passwordUpper) {choices = number.concat (upperCase, spChar);}
    // This line of code is if the user wants their password to contain numbers, lower cases and upper cases
  else if (passwordNumber && passwordLower && passwordUpper) {choices = number.concat (upperCase, lowerCase);}
    // This line of code is if the user wants their password to have a number, special character and a lower case
  else if (passwordNumber && passwordChar && passwordLower) {choices = number.concat (spChar, lowerCase);}
    // This line of code is if the user wants their password to have a lower case, special character and an upper case
  else if (passwordLower && passwordChar && passwordUpper) {choices = lowerCase.concat (upperCase, spChar);}
  
  // These next lines of code are only if the user selects 2 different possible combinations for their password
    // This next line of code are only if the user wants their password to have only numbers and special characters
  else if (passwordNumber && passwordChar) {choices = number.concat (spChar);}
    // This next line of code are only if the user wants their password to have numbers and upper case letters
  else if (passwordNumber && passwordUpper) {choices = number.concat (upperCase);}
    // This next line of code are only if the user wants their password to have numbers and lower case letters
  else if (passwordNumber && passwordLower) {choices = number.concat (lowerCase);}
    // This next line of code are only if the user wants their password to have only special characters and upper case letters
  else if (passwordChar && passwordUpper) {choices = spChar.concat (upperCase);}
    // This next line of code are only if the user wants their password to contain both special characters and lower case letters
  else if (passwordChar && passwordLower) {choices = spChar.concat (lowerCase);}
    // This next line of code are only if the user wnats their password to contain both upper and lower case letters
  else if (passwordUpper && passwordLower) {choices = upperCase.concat (lowerCase);}
  
  // These next lines of code are only if the user selects only one option for the password
    // This line of code is in case the user only wants number on their password
  else if (passwordNumber) {choices = number;}
    // This line of code is in case the user only wants special characters on their password
  else if (passwordChar) {choices = spChar;}
    // This line of code is in case the user only wants upper case letters on their password
  else if (passwordUpper) {choices = upperCase;}
    // This line of code is in case the user only wants lower case letters on their password
  else if (passwordLower) {choices = lowerCase;}
  // empty array that will contain the new empty password
  var randomPassword = [];
  // This next line of code is the loop requiered for the creation of the password
  for (var i = 0; i<passwordLength; i++) {
    var allChoices = choices [Math.floor(Math.random()* choices.length)]; randomPassword.push(allChoices);
  }
  // This next line of code will be used so that the password will be displayed on the box
  return randomPassword.join("")
  }

// Add event listener to generate button 
generate.addEventListener ("click", writePassword)
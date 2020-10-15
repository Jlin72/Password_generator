// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array containing numbers from 0 to 1
var number = ["0","1","2","3","4","5","6","7","8","9"];
// Array containing letters from A to Z in uppercase
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z",];
// Array containing letters from a to z in lowercase
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z",];
// Array containing the special characters for the password
var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// This variable is used for the concanation of the variables later
var choices;

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword () {
  // This next line of code is used to tell the user to add a value, and if they don't add a correct value. They will be reminded.
  var firstPrompt = prompt("How long would you like your password to be? Choose between 8 to 128 characters.");
  if (!firstPrompt) {alert("Please add a value");} else if (firstPrompt <8 || firstPrompt > 128) {prompt ("Please add a value higher than 8 or lower than 128");
  } else {
    // This next line of code is used to ask the user how they would like their password to be like.
    var secondPrompt = confirm("Do you want numbers?");
    var thirdPrompt = confirm("Do you want special characters?");
    var fourthPrompt = confirm("Do you want upper case characters?");
    var fifthPrompt = confirm("Do you want lower case characters?");
    };
  // This next line of code is used in case no option has been chosen for the password generator
  if (!secondPrompt && !thirdPrompt && !fourthPrompt  && !fifthPrompt) {alert("Please choose a criteria");}
  // These line of code is if the user selects the all the options available for the password
  else if (secondPrompt && thirdPrompt && fourthPrompt && fifthPrompt) {choices = spChar.concat (number, upperCase, lowerCase);}
  // These next lines of code are if the user selects only 3 different combinations for their password
  else if (secondPrompt && thirdPrompt && fourthPrompt) {choices = number.concat (upperCase, spChar);}
  else if (secondPrompt && thirdPrompt && fifthPrompt) {choices = number.concat (upperCase, lowerCase);}
  else if (fifthPrompt && thirdPrompt && fourthPrompt) {choises = lowerCase.concat (upperCase, spChar);}
  // These next lines of code are only if the user selects 2 different possible combinations for their password
  else if (secondPrompt && thirdPrompt) {choices = number.concat (spChar);}
  else if (secondPrompt && fourthPrompt) {choices = number.concat (upperCase);}
  else if (secondPrompt && fifthPrompt) {choises = number.concat (lowerCase);}
  else if (thirdPrompt && fourthPrompt) {choices = spChar.concat (upperCase);}
  else if (thirdPrompt && fifthPrompt) {choices = spChar.concat (lowerCase);}
  else if (fourthPrompt && fifthPrompt) {choices = upperCase.concat (lowerCase);}
  // These next lines of code are only if the user selects only one option for the password
  else if (secondPrompt) {choices = number;}
  else if (thirdPrompt) {choices = spChar;}
  else if (fourthPrompt) {choices = upperCase;}
  else if (fifthPrompt) {choices = lowerCase;}

  var randomPassword = [];
  // This next line of code is the loop requiered for the generation of the password
  for (var i = 0; i<firstPrompt; i++) {
    var allChoices = choices [Math.floor(Math.random()* choices.length)]; randomPassword.push(allChoices);
  }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


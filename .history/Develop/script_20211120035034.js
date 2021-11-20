// Assignment code here

//lowercase array
lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//uppercase array
upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//number array
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//special character array
specialChars = [" ", "!", "”", "“", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//ask for password length
var passwordLength = Number(window.prompt("Enter desired password length between 8-128 (inclusive)"));


//if input is valid, log it
if (passwordLength >= 8 && passwordLength <= 128){
  console.log(passwordLength);

//user now must confirm what types of characters they want
  lowerCaseConfirm = window.confirm("Do you want lowercase characters?");
  upperCaseConfirm = window.confirm("Do you want UPPERCASE characters?");
  numberConfirm = window.confirm("Do you want numbers?");
  specialConfirm = window.confirm("Do you want special characters? ex. !@#$%");
}

else
//if input isn't valid, inform user and return them to the first prompt
{
  window.alert("Invalid input.");
  writePassword();
}

//if the user answers no to all of the above confirms, they need to be sent back to choose at least one
if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialConfirm) {
  window.alert("You have to select at least one of the following: lowercase, uppercase, numbers, or special characters.");
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

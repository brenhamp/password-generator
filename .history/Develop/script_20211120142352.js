// Assignment code here

//lowercase array
lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//UPPERCASE array
upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//numbers array
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//special characters array
specialChars = [" ", "!", "”", "“", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//ask for password length
var passwordLength = window.prompt("Enter desired password length between 8-128 (inclusive)");

//if input is valid, log and proceed
if (passwordLength >= 8 && passwordLength <= 128){
  console.log(passwordLength);

//user now must confirm what types of characters they want
  lowerCaseConfirm = window.confirm("Do you want lowercase characters?");
  upperCaseConfirm = window.confirm("Do you want UPPERCASE characters?");
  numberConfirm = window.confirm("Do you want numbers?");
  specialConfirm = window.confirm("Do you want special characters? ex. !@#$%");

  //if the user answers no to all of the above confirms...
if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialConfirm) {
  //...tell them they have to pick at least one and kill the function
  window.alert("You have to select at least one type of character to generate a password.");
}

//otherwise, it's time to generate a password for them
else {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 };
 
//if input is not a number, inform user and return to first prompt
if (isNaN(passwordLength) == true) {
  window.alert("Error! Please type numbers only.")
  writePassword();
}

//if cancel button is clicked, stop prompts
else if (passwordLength == null && passwordLength == "") {
  console.log(passwordLength);
  return;
}

//if length chosen is too big or too small, inform user and return them to the first prompt
else if (passwordLength < 8, passwordLength !== 0, passwordLength.indexOf(" ") == 0, passwordLength !== null || passwordLength > 128, passwordLength !== 0, passwordLength.indexOf(" ") == 0, passwordLength !== null ) {
  console.log(passwordLength);
  window.alert("Error! Number is too large or too small.");
  writePassword();
}

else if (passwordLength == "") {
  console.log(passwordLength);
  window.alert("Error! You didn't enter anything.")
  writePassword();
}

else if (passwordLength.indexOf (" ") > 0) {
  window.alert("Error! Do not enter spaces.")
}





};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

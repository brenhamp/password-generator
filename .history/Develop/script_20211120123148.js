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
var passwordLength = Number(window.prompt("Enter desired password length between 8-128 (inclusive)"));


//if form is left blank, ask user to input a value and return to previous prompt
if (passwordLength == "") {
  window.alert("Please enter a value between 8 and 128 (inclusive)");
  writePassword();
  console.log(passwordLength);
}

//if input is valid, log and proceed
else if (passwordLength >= 8 && passwordLength <= 128 && passwordLength !== null){
  console.log(passwordLength);

//user now must confirm what types of characters they want
  lowerCaseConfirm = window.confirm("Do you want lowercase characters?");
  upperCaseConfirm = window.confirm("Do you want UPPERCASE characters?");
  numberConfirm = window.confirm("Do you want numbers?");
  specialConfirm = window.confirm("Do you want special characters? ex. !@#$%");
}


//if input isn't valid, inform the user
else if (passwordLength < 8 && passwordLength !== null || passwordLength > 128 && passwordLength !== null)

{
  window.alert("Invalid input.");
  writePassword();
}

else if (passwordLength == null){
  return;
}


//if the user answers no to all of the above confirms...
if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !specialConfirm) {
  //...tell them they have to pick at least one
  window.alert("You must select at least one type of character to generate a password.");
  writePassword();
}



//otherwise, it's time to generate a password for them
else {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

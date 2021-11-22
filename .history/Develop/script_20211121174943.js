// Assignment code here
var lowercaseChar = false;
var uppercaseChar = false;
var numberChar = false;
var specialChar = false;
var passwordLength;

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
  characterSelect ();
}

//if input is not a number, inform user and return to first prompt
else if (isNaN(passwordLength) == true && passwordLength !== 0) {
  window.alert("Error! Please type numbers only.")
  writePassword();
}

//make sure that if cancel button is clicked, stop prompts
else if (passwordLength == null && passwordLength == "") {
  console.log(passwordLength);
  return;
}

//if field is left blank, inform and restart
else if (passwordLength == "") {
  console.log(passwordLength);
  window.alert("Error! You didn't enter anything.")
  writePassword();
}

//if string contains spaces, inform and restart
else if (/\s+/.test(passwordLength)) {
  window.alert ("Error! Do not use spaces.")
  writePassword();
}

//if length chosen is too big or too small, inform user and return them to the first prompt
else if (passwordLength < 8 && passwordLength !== "" && passwordLength !== null && passwordLength !== 0 || passwordLength > 128 && passwordLength !== "" && passwordLength !== null && passwordLength !== 0) {
  console.log(passwordLength)
  window.alert("Error! Number is too large or too small.")
  writePassword();
}
};

characterSelect = function () {
//user now must confirm what types of characters they want
  lowercaseChar = window.confirm("Do you want lowercase characters?");
  console.log(lowercaseChar)
  uppercaseChar = window.confirm("Do you want UPPERCASE characters?");
  console.log(uppercaseChar)
  numberChar = window.confirm("Do you want numbers?");
  console.log(numberChar)
  specialChar = window.confirm("Do you want special characters? ex. !@#$%");
  console.log(specialChar)

  //if the user answers no to all of the above confirms...
if (!lowercaseChar && !uppercaseChar && !numberChar && !specialChar) {
  //...tell them they have to pick at least one, and ask them again
  window.alert("You have to select at least one type of character to generate a password.");
}

//otherwise, it's time to generate a password for them
else {
passwordText ();
}
};


passwordText = function() {
  
  var password = generatePassword();

  document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    var generatedPassword;

  if (lowercaseChar == true, uppercaseChar == true, numberChar == true, specialChar == true) {
     generatedPassword = lowercaseChar[Math.floor(Math.random()*passwordLength)] + uppercaseChar[Math.floor(Math.random()*passwordLength)];
     JSON.stringify(generatedPassword);
console.log(generatedPassword);

  };
};

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
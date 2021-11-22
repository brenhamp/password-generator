// Assignment code here
var lowercaseConfirm;
var upperCaseConfirm;
var numberConfirm;
var specialConfirm;
var passwordLength;

//lowercase array
lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//UPPERCASE array
uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//numbers array
numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

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
  lowercaseConfirm = window.confirm("Do you want lowercase characters?");
  console.log(lowercaseConfirm)
  uppercaseConfirm = window.confirm("Do you want UPPERCASE characters?");
  console.log(uppercaseConfirm)
  numberConfirm = window.confirm("Do you want numbers?");
  console.log(numberConfirm)
  specialConfirm = window.confirm("Do you want special characters? ex. !@#$%");
  console.log(specialConfirm)

  //if the user answers no to all of the above confirms...
if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
  //...tell them they have to pick at least one, and ask them again
  window.alert("You have to select at least one type of character to generate a password.");
}

//otherwise, it's time to generate a password for them
else {
passwordText ();
}
};


passwordText = function() {
  
  var allowedChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
  var password = "";

  if (!lowercaseConfirm) {
    allowedChars =- lowercaseChars;
  }
  
  if (!uppercaseConfirm) {
    allowedChars =- uppercaseChars;
  }

  if (!numberConfirm) {
    allowedChars =- numberChars;
  }

  if (!specialConfirm) {
    allowedChars =- specialChars;
  }

  for(var i = 0; i < passwordLength; i++) {
    password = allowedChars.charAt(Math.floor(Math.random() * allowedChars));  
    return password;
  }

  writePassword ();

  function writePassword () {
  document.querySelector("#password");
  passwordText.value = password;
  console.log(password);

  };  





};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
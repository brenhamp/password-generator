// Assignment code here
var lowercaseConfirm;
var upperCaseConfirm;
var numberConfirm;
var specialConfirm;
var allowedChars = [];
var charSet = [];
var passwordLength;
var password = "";

//lowercase array
var lowercaseChars = ["abcdefghijklmnopqrstuvwxyz"]

//UPPERCASE array
var uppercaseChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//numbers array
var numberChars = ["1234567890"]

//special characters array
var specialChars = [" !”“#$%&'()*+-./:;<=>?@[\\]^_`{|}~"]




function getPasswordLength() {
  

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
  getPasswordLength();
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
  getPasswordLength();
}

//if string contains spaces, inform and restart
else if (/\s+/.test(passwordLength)) {
  window.alert ("Error! Do not use spaces.") 
  getPasswordLength();
}

//if length chosen is too big or too small, inform user and return them to the first prompt
else if (passwordLength < 8 && passwordLength !== "" && passwordLength !== null && passwordLength !== 0 || passwordLength > 128 && passwordLength !== "" && passwordLength !== null && passwordLength !== 0) {
  console.log(passwordLength)
  window.alert("Error! Number is too large or too small.") 
  getPasswordLength();
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

//all 4 character types

else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, uppercaseChars, numberChars, specialChars)
}

//3 character types

else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, uppercaseChars, numberChars)
}

else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, uppercaseChars, specialChars)
}

else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, numberChars, specialChars)
}

else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(uppercaseChars, numberChars, specialChars)
}

//2 character types

else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, uppercaseChars)
}

else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, numberChars)
}

else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(uppercaseChars, numberChars)
}

else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars, specialChars)
}

else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(uppercaseChars, specialChars)
}

else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && specialConfirm) {
 charSet = allowedChars.concat(numberChars, specialChars)
}

//1 character type

else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(lowercaseChars)
}

else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(uppercaseChars)
}

else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && !specialConfirm) {
 charSet = allowedChars.concat(numberChars)
}

else {
 charSet = allowedChars.concat(specialChars)
}

generatePassword();
};

function generatePassword() {

    for(var i = 0; i < passwordLength; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];    

  };

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

writePassword = function () {

  var password = getPasswordLength();

  document.getElementById("password").innerHTML = password;



};








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
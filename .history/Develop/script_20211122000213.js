// Assignment code here
 lowercaseConfirm=true;
 upperCaseConfirm=true;
 numberConfirm=true;
 specialConfirm=true;
allowedChars = [];
charSet = [];
passwordLength = 1;
password = "";
allowedArray = [];
passArray = [];

//lowercase array
lowercaseChars = ["abcdefghijklmnopqrstuvwxyz"]

//UPPERCASE array
uppercaseChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

//numbers array
numberChars = ["1234567890"]

//special characters array
specialChars = [" !”“#$%&'()*+-./:;<=>?@[\\]^_`{|}~"]




function getPasswordLength() {
  

//ask for password length
var passwordLength = window.prompt("Enter desired password length between 8-128 (inclusive)");

//if input is valid, log and proceed
if (passwordLength >= 8 && passwordLength <= 128){
  console.log(passwordLength);
  characterSelect ();
  generatePassword ();
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

if (lowercaseConfirm) {
  allowedArray = allowedArray.concat(lowercaseChars)

}

if (uppercaseConfirm) {
  allowedArray = allowedArray.concat(uppercaseChars)
}

if (numberConfirm) {
  allowedArray = allowedArray.concat(numberChars)
}

if (specialConfirm) {
  allowedArray = allowedArray.concat(specialChars)
}

console.log(allowedArray);

for (var i=0; i < passwordLength; i++) {

  passArray.push (allowedArray[Math.floor(math.random() * allowedArray.length)]);
}

return passArray.join("");




  

};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
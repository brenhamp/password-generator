// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
function generatePassword() {

var lowercaseConfirm=true;
var upperCaseConfirm=true;
var numberConfirm=true;
var specialConfirm=true;
var allowedChars = [];
var charSet = [];
var passwordLength = 1;
var password = "";
var allowedArray = [];
var passArray = [];


//lowercase array
var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//UPPERCASE array
var uppercaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//numbers array
var numberChars = ["1","2","3","4","5","6","7","8","9","0"]

//special characters array
var specialChars = ["!", "”", "“", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", ,"|", ",", "}","~"]

//ask for password length
var passwordLength = window.prompt("Enter desired password length between 8-128 (inclusive)");

//if input is valid, log and proceed
if (passwordLength >= 8 && passwordLength <= 128){
  console.log(passwordLength);

//user now must confirm what types of characters they want
lowercaseConfirm = window.confirm("Do you want lowercase characters?");
console.log(lowercaseConfirm)
uppercaseConfirm = window.confirm("Do you want UPPERCASE characters?");
console.log(uppercaseConfirm)
numberConfirm = window.confirm("Do you want numbers?");
console.log(numberConfirm)
specialConfirm = window.confirm("Do you want special characters? ex. !@#$%");
console.log(specialConfirm)

//add the ones the user added "yes" to, to an array
if (lowercaseConfirm == true) {
allowedArray = allowedArray.concat(lowercaseChars)

}

if (uppercaseConfirm == true) {
allowedArray = allowedArray.concat(uppercaseChars)
}

if (numberConfirm == true) {
allowedArray = allowedArray.concat(numberChars)
}

if (specialConfirm == true) {
allowedArray = allowedArray.concat(specialChars)
}

console.log(allowedArray);

//use math to randomly generate a password with the above parameters
for (var i=0; i < passwordLength; i++) {

  passArray.push (allowedArray[Math.floor(Math.random() * allowedArray.length)]);
  }
  
  return passArray.join("");

};

//if the user answers no to all of the above confirms...
if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !specialConfirm) {
//...tell them they have to pick at least one, and ask them again
window.alert("You have to select at least one type of character to generate a password.");
}

//if input is not a number, inform user and return to first prompt
if (isNaN(passwordLength) == true && passwordLength !== 0) {
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
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
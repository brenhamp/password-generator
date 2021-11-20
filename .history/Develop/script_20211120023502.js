// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {};
    
//ask for a valid password length and console.log the user's input

 function writePassword() {

  //ask for desired password length
var passwordLength = Number(window.prompt("Enter desired password length between 8-128 (inclusive)"));

while(true) {
if (passwordLength >= 8 || passwordLength <= 128){
  console.log(passwordLength)
}
else
{
  window.alert("Invalid input.")
  function writePassword();
}
}

//lowercase character inclusion

var lowerCase = window.prompt("Do you want lowercase letters in your password? Type yes or no.");

//UPPERCASE character inclusion

var upperCase = window.prompt("Do you want UPPERCASE letters in your password? Type yes or no.");

//number inclusion

var passwordNumbers = window.prompt("Do you want numbers in your password? Type yes or no.");

//special character inclusion

var specialCharacters = window.prompt("Do you want special characters (ex: !@#$%) in your password? Type yes or no.");


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

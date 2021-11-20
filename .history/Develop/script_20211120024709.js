// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  //ask for desired password length
var passwordLength = Number(window.prompt("Enter desired password length between 8-128 (inclusive)"));

if (passwordLength >= 8 || passwordLength <= 128){
  console.log(passwordLength)
}
else
{
  window.alert("Invalid input.");
  function writePassword()
}






  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

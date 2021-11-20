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


  //ask for desired password length
var passwordLength = Number(window.prompt("Enter desired password length between 8-128 (inclusive)"));

if (passwordLength >= 8 && passwordLength <= 128){
  console.log(passwordLength);

  var lowerCase = window.prompt("Do you want lowercase letters? Enter yes or no.")
  if (lowerCase === 'yes', 'YES', 'Yes', 'y', 'Y') {
    console.log(lowerCase.value);
  }
  else if (lowerCase === 'no', 'NO', 'No', 'n', 'N') {
    !lowerCase;
  }


}
else
{
  window.alert("Invalid input.");
  writePassword();
}






  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

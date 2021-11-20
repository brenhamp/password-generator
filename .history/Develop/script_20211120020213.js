// Assignment code here





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


    
//ask for a valid password length and console.log the user's input

  var passwordSize = window.prompt ("Enter desired password length between 8-128 (inclusive)");
  if (passwordSize >=8 || passwordSize <=128 ) {
    console.log(passwordSize)
  }
  else
  {window.prompt ("Invalid input. Please enter a number between 8 and 128 (inclusive)");
  var passwordSize = window.prompt ("Enter desired password length between 8-128 (inclusive)");}

  };  
  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

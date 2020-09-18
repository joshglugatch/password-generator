// Assignment Code
var generateBtn = document.querySelector("#generate");


//create password length function
function howLong(){
  var response = prompt("How many characters would you like your password to be?") 
  if(response < 8 || response > 128){
    alert("Password must be between 8 and 128 characters.")
    howLong()
  }
}
// run password length function
howLong()

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



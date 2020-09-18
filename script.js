// Assignment Code
var generateBtn = document.querySelector("#generate");


//create password length function
function howLong(){
  var response = prompt("How many characters would you like your password to be?");
  if(response === null){
    return;
  }
  if(response < 8 || response > 128){
    alert("Password must be between 8 and 128 characters.");
    howLong()
  } 
  if(response !== Number){
    alert("Input may only contain numbers.")
    howLong()
  }
  console.log(response);
}
// run password length function
howLong()

//password criteria


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



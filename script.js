// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwArray = []


// Write password to the #password input

function writePassword(){
  
  // password length 
  var response = prompt("How many characters would you like your password to be?");
  console.log(response)
  if(response === null){
    return;
  }
  if(response < 8 || response > 128){
    alert("Password must be a number between 8 and 128 characters.");
    return;
  } 
  if(isNaN(response)){
    alert("Input may only contain numbers.")
    return;
  } 

  // password criteria
  var upperValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerValues = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberValues = ["1","2","3","4","5","6","7","8","9","0"];
  var symbolValues = ["!","@","#","$","%","^","&","*","(",")","+","="];
  
  alert("Choose your password character criteria.")
  var upperCase = confirm("Do you want your password to include capitalized letters? (Click OK for yes, and CANCEL for no)");
  var lowerCase = confirm("Do you want your password to include lower case letters? (Click OK for yes, and CANCEL for no)");
  var numbers = confirm("Do you want your password to include numbers? (Click OK for yes, and CANCEL for no)");
  var symbols = confirm("Do you want your password to include symbols? (Click OK for yes, and CANCEL for no)");

  if(upperCase){
  pwArray.push(...upperValues)
  }
  if(lowerCase){
  pwArray.push(...lowerValues)
  }
  if(numbers){
  pwArray.push(...numberValues)
  }
  if(symbols){
  pwArray.push(...symbolValues)
  }
}

var password = generatePassword();

function generatePassword(){

  var passwordText = document.querySelector("#password");
  

  for(var i=0, i < pwArray.length, i++){

  }


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input

function generatePassword(){
  
  // password length 
  
  var response = prompt("How many characters would you like your password to be?");
  //console.log(response)
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
  
  response = parseInt(response)
  console.log(response)
  // password criteria
  // var upperValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var lowerValues = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var numberValues = ["1","2","3","4","5","6","7","8","9","0"];
  // var symbolValues = ["!","@","#","$","%","^","&","*","(",")","+","="];

  var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValues = "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "1234567890";
  var symbolValues = "!@#$%^&*()+=";

  
  alert("Choose your password character criteria.")
  pwString=""

  var upperCase = confirm("Click OK include capitalized letters.");
  if(upperCase){
    pwString += pwString.concat(upperValues)
    }
  var lowerCase = confirm("Click OK to include lower case letters.");
  if(lowerCase){
    pwString += pwString.concat(lowerValues)
    }
  var numbers = confirm("Click OK to include numbers.");
  if(numbers){
    pwString += pwString.concat(numberValues)
    }
  var symbols = confirm("Click OK to include symbols.");
  if(symbols){
    pwString += pwString.concat(symbolValues)
    }

  
    
  var passwordText = document.querySelector("#password");
  var password = "";
   //random generation
  for(var i = 0; i <= response; i++){
  password = password + pwString.charAt(Math.floor(Math.random() * Math.floor(pwString.length - 1)))
  
  }
  //add to text
  passwordText.value = password
  console.log(password)
}


// // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



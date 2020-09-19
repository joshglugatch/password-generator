// Assignment Code
var generateBtn = document.querySelector("#generate");



//generate password function

function generatePassword(){
  
  // password length 
  var response = prompt("How many characters would you like your password to be?");
  
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
  
 //criteria values
  var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValues = "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "1234567890";
  var symbolValues = "!@#$%^&*()+=";
  //new string with chosen inputs
  pwString="";
  
  // password criteria 
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
  else{
    alert("Please select valid criteria.")
    return;
  }

  
    
  //random generation
  var password = "";
  for(var i = 1; i <= response; i++){
  password = password + pwString.charAt(Math.floor(Math.random() * Math.floor(pwString.length)))
  }

  //add to text
  var passwordText = document.querySelector("#password");
  passwordText.value = password
  console.log(password)
}


// // Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);



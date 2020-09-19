// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//generate password function

function generatePassword(){
  
  // password length prompt 
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
  if(upperCase == false && lowerCase == false && numbers == false && symbols == false){
    alert("Please input valid criteria.")
  }

  

  
    
  //random generation
  var password = "";
  for(var i = 1; i <= response; i++){
  password = password + pwString.charAt(Math.floor(Math.random() * Math.floor(pwString.length)))
  }

  //add text to page and console
  var passwordText = document.querySelector("#password");
  passwordText.value = password
  console.log(password)
}






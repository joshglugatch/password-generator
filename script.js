// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Generate password function
function generatePassword(){
  
  // Password length prompt 
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
  
 // Criteria values
  var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValues = "abcdefghijklmnopqrstuvwxyz";
  var numberValues = "1234567890";
  var symbolValues = "!@#$%^&*()+=";
  
  // New string with chosen inputs
  var pwString="";
  var critChoice="";
  
  // Password criteria 
  var upperCase = confirm("Click OK include capitalized letters.");
  if(upperCase){
    pwString += pwString.concat(upperValues);
    var randUp = Math.floor(Math.random() * upperValues.length);
    critChoice += upperValues.charAt(randUp);
    }
  var lowerCase = confirm("Click OK to include lower case letters.");
  if(lowerCase){
    pwString += pwString.concat(lowerValues);
    var randLow = Math.floor(Math.random() * lowerValues.length);
    critChoice += lowerValues.charAt(randLow);
    }
  var numbers = confirm("Click OK to include numbers.");
  if(numbers){
    pwString += pwString.concat(numberValues);
    var randNum = Math.floor(Math.random() * numberValues.length);
    critChoice += numberValues.charAt(randNum);
    }
  var symbols = confirm("Click OK to include symbols.");
  if(symbols){
    pwString += pwString.concat(symbolValues);
    var randSym = Math.floor(Math.random() * symbolValues.length);
    critChoice += symbolValues.charAt(randSym);
    }
  if(upperCase == false && lowerCase == false && numbers == false && symbols == false){
    alert("Please input valid criteria.")
  }

  console.log(critChoice)

  

  
    
  // Random generation
  var password = "";
  password = password.concat(critChoice)

  for(var i = 0; i < response - critChoice.length; i++){
  password = password + pwString.charAt(Math.floor(Math.random() * Math.floor(pwString.length)))
  }
  
  // Shuffles generated password so critChoice is not always at the beginning
  var password = password.split("").sort(function(){return 0.5-Math.random()}).join("");

  // Add text to page and console
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}






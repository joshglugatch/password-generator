# Random Password Generator 
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://www.mit.edu/~amini/LICENSE.md)
<br>
This webpage is a random password generator. It will generate a password at random from a list of capital letters, lower case latters, numbers, and special characters. Password length and character types can be chosen by the user. Password length can be no less than 8 and no more than 128. At least one character type must be chosen. Users will be prompted for password length after clicking the "Generate Password" button along with confirm boxes to choose criteria.
  
<br>

![exampleGif](https://github.com/joshglugatch/password-generator/blob/master/Assets/generator.gif?raw=true)

<br>

## Built With
* JavaScript
* HTML
* CSS

## Features
Generates a random password based on what the user wants. It can be any length between 8 and 128 characters. Users can choose if they want certain character types in their password. 

## Code Example
Here is the code that allows the user to choose which character types they would like in their generated password. If they choose a type of character, it adds those values to a new string to be randomly chosen from. The critChoice variable ensures that one of each character type chosen by the user is added to the final password by placing a character type in the beginning of the string.

<br>  

![criteria](https://github.com/joshglugatch/password-generator/blob/master/Assets/criteriascreenshotNEW.png?raw=true)

<br>
Added a string shuffler to my final password to prevent the user criteria choices from being the first four characters of the password string.
<br>

![shuffler](https://github.com/joshglugatch/password-generator/blob/master/Assets/shuffle.png?raw=true)

This line of code was found on Stack Overflow.

<br>

# Deployed Link:
https://joshglugatch.github.io/password-generator/

<br>

# Repository Link:
https://github.com/joshglugatch/password-generator

<br>

### Author:
Josh Glugatch  

[![GitHub](https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/joshglugatch)
<br>
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/joshua-glugatch)

### Credits:
Thanks to Joel Mellon on StackOverflow for the string shuffle code. 
Link to shuffle code: [![StackOverflow](https://github.com/joshglugatch/password-generator/blob/master/Assets/so-icon.png?raw=true)](https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript)

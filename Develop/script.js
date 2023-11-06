// Assignment Code
var generateBtn = document.querySelector("#generate");
const numbers =[1,2,3,4,5,6,7,8,9,0];
const symbols = ["!", "@", "#", "$","%","&","*"];
const lowerAlph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function generatePassword(){
// 1. Prompt the user for the password criteria
//      a. Password length 8 < 128
//      b. Lowercase, uppercase, numbers, and special characters
    let length = parseInt(prompt("How many characters will your password be? (8-128 characters)"));
    if(isNaN(length) || length < 8 || length > 128 ) {
      alert("Length has to be a NUMERICAL value between 8-128. Try Again!");
      return false;
  }
    

// 2. Validate the input. 


// 3. Generate password based on criteria.


// 4. Display password to the page.
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

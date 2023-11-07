// Assignment Code

var generateBtn = document.querySelector("#generate");
var allChars = {
    numbers: "1234567890".split(""),
    symbols: "!@#$%&*()-_".split(""),
    lowerCase: "abcdefghijklmnopqrstuvwxyz".split(""),
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
   };

var passLength = 8;


function generatePassword(){
    let passInfo = "";
    var passChars = [];

    let charaAmount = window.prompt("Enter the number of characters you want for your password. (Passwords MUST be between 8 and 128 characters.");
      if (charaAmount >= 8 && charaAmount < 129) {
          const getNumber = window.confirm("Would you like to include numbers?");
          if (getNumber) {
            
             passChars = passChars.concat(allChars.numbers);
              
          };
          const getSpecChar = window.confirm("Would you like to include special characters?");
          if (getSpecChar) {
            
            passChars = passChars.concat(allChars.symbols);
          };
          const getLower = window.confirm("Would you like to include lowercase letters?");
          if (getLower) {
            
            passChars = passChars.concat(allChars.lowerCase);
          };
          const getUpper = window.confirm("Would you like to include uppercase letters?");
          if (getUpper) {
            
            passChars = passChars.concat(allChars.upperCase);
          };
          
          if (!passChars.length) {
            window.alert("Invalid. You must choose at least one option. Try again.");
            return generatePassword();
          };
          
          for (var i = 0; i < charaAmount; i++) {
            var index = Math.floor(Math.random() * passChars.length);
            
            passInfo += passChars[index];
          }; 

          return passInfo;
      }

          
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

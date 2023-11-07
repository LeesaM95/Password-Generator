// Assignment Code
var generateBtn = document.querySelector("#generate");
var allChars = {
    numbers: "1,2,3,4,5,6,7,8,9,0",
    symbols: "!,@,#,$,%,&,*,(,),-,_",
    lowerCase: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",
    upperCase: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
   };


function generatePassword(){
    let passInfo = "";
    const passChars = [];
    
    let charaAmount = window.prompt("Enter the number of characters you want for your password. (Passwords MUST be between 8 and 128 characters.");
      if (charaAmount >= 8 && charaAmount < 129) {
          const getNumber = window.confirm("Would you like to include numbers?");
          if (getNumber) {
              passInfo += allChars.numbers;
              passChars.push(getRandomChar(allChars.numbers));
          };
          const getSpecChar = window.confirm("Would you like to include special characters?");
          if (getSpecChar) {
            passInfo += allChars.symbols;
            passChars.push(getRandomChar(allChars.symbols));
          };
          const getLower = window.confirm("Would you like to include lowercase letters?");
          if (getLower) {
            passInfo += allChars.lowerCase;
            passChars.push(getRandomChars(allChars.lowerCase));
          };
          const getUpper = window.confirm("Would you like to include uppercase letters?");
          if (getUpper) {
            passInfo += allChars.upperCase;
            passChars.push(getRandomChar(allChars.upperCase));
          };
          if (!passInfo) {
            window.alert("Invalid. You must choose at least one option. Try again.");
            return generatePassword();
          };
          
          while (passChars.length < charaAmount) {
            passChars.push(getRandomChars(passInfo));
          };
          //return password character array concat-style to a string

          //if user response is invalid

          //alert user

          //return to initial state

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

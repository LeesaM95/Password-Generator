// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, numbers, uppChar, lowChar, specChar, noDuplicates) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  let characters = '';

  if(numbers){
    characters += '0,1,2,3,4,5,6,7,8,9'
  }
  if(uppChar){
    characters += 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
  }
  if(lowChar){
    characters += 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
  }
  if(specChar){
    characters += '!,@,#,$,%,^,&,*,(,)'
  }

  let passwordArray = [];

  while(passwordArray.length < length) {
  const character = characters[Math.floor(Math.random() * characters.length)];

  if(!noDuplicates || !passwordArray.includes(character)){
    passwordArray.push(character)
  }
  passwordArray.push(character)
}

  return passwordArray.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

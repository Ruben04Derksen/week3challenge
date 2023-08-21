// Assignment Code
var generateBtn = document.querySelector("#generate");

var alpha = ["a", "b", 'c', 'd', "'e", "f", "g", "h", "i", "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Write password to the #password input
function generatePassword() {
  var password = "";
  let length = alpha.length
  for(var i = 0; i < 10;i++)
  {
    password += alpha[Math.floor(Math.random()*length)];
  }
  return password + Math.random()*100000000000000000;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

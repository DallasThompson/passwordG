var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var length = 0;
  var lowerCase = false;
  var upperCase = false;
  var numeric = false;
  var specialCharacter = false;

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_+=<>?";
  var allChars = "";

  while (length < 8 || length > 128) {
    length = prompt(
      "Please enter a length for the password greater than 7 and less than 129."
    );
  }

  while (!lowerCase && !upperCase && !numeric && !specialCharacter) {
    lowerCase = confirm("Should password include lowercase characters?");

    upperCase = confirm("Should password include uppercase characters?");

    numeric = confirm("Should password include numeric values?");

    specialCharacter = confirm("Should password include special characters?");

    if (!lowerCase && !upperCase && !numeric && !specialCharacter) {
      alert("Please select at least one character type.");
    }
  }
  if (lowerCase) allChars += lowercaseChars;
  if (upperCase) allChars += uppercaseChars;
  if (numeric) allChars += numericChars;
  if (specialCharacter) allChars += specialChars;

  for (i = 0; i < length; i++) {
    var ranIndex = getRandomInt(allChars.length);
    password += allChars[ranIndex];
  }

  return password;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

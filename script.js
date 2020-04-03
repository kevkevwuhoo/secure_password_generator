// define all possible characters in their respective criteria
var lowercase = "abcdefghjklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//  function generatePassword()
function generatePassword() {
    // ask user for password length
    var passLength = prompt("Choose a length of characters from 8 to 128.");
    // if the length is 8 to 128, generate the password
    if (passLength >= 8 && passLength <= 128) {
        // establish password criteria
        alert(
            "Click OK if you want each of the following password criteria. Click cancel if you don't want it."
        );
        var wantLower = confirm("Do you want lowercase letters?");
        var wantUpper = confirm("Do you want uppercase letters?");
        var wantNum = confirm("Do you want numbers?");
        var wantSpecial = confirm("Do you want special characters?");
        alert(
            "You want a password of " +
                passLength +
                " characters.\nLowercase: " +
                wantLower.toString() +
                "\nUppercase: " +
                wantUpper.toString() +
                "\nNumbers: " +
                wantNum.toString() +
                "\nSpecial Characters: " +
                wantSpecial.toString()
        );

        var passCriteria = {
            yesLower: wantLower,
            yesUpper: wantUpper,
            yesNumber: wantNum,
            yesSpecial: wantSpecial
        };

        // for each criteria, if true, then generate random character and index for that set of characters
        // initialize final password variables
        var finalString = "";
        var finalPassword = "";
        var lowerIndex, upperIndex, numberIndex, specialIndex;
        // if user want lowercase
        if (passCriteria.yesLower) {
            // random index in password
            lowerIndex = Math.floor(Math.random() * passLength);
            // random lowercase letter
            var lowerChar = lowercase.charAt(
                Math.floor(Math.random() * lowercase.length)
            );
            // add lowercase letters to the final string
            finalString = finalString + lowercase;
        }
        // if user wants uppercase
        if (passCriteria.yesUpper) {
            // random uppercase index, repeat if same index as lowercase letter
            do {
                upperIndex = Math.floor(Math.random() * passLength);
            } while (upperIndex === lowerIndex);
            // random uppercase letter
            var upperChar = uppercase.charAt(
                Math.floor(Math.random() * uppercase.length)
            );
            // add uppercase letters to the final string
            finalString = finalString + uppercase;
        }
        // if user wants numbers
        if (passCriteria.yesNumber) {
            // random number index, repeat if same index as the others
            do {
                numberIndex = Math.floor(Math.random() * passLength);
            } while (numberIndex === lowerIndex || numberIndex === upperIndex);
            // random number
            var numberChar = numeric.charAt(
                Math.floor(Math.random() * numeric.length)
            );
            // add numbers to final string
            finalString = finalString + numeric;
        }
        // if user wants special characters
        if (passCriteria.yesSpecial) {
            // random special index, repeat if same index as the others
            do {
                specialIndex = Math.floor(Math.random() * passLength);
            } while (
                specialIndex === lowerIndex ||
                specialIndex === upperIndex ||
                specialIndex === numberIndex
            );
            // random special character
            var specialChar = special.charAt(
                Math.floor(Math.random() * special.length)
            );
            // add special characters to final string
            finalString = finalString + special;
        }
        // if final string is empty, then no criteria were selected.
        if (finalString === "") {
            alert("No criteria selected.");
            return "You must select at least one criteria.";
        }
        // if final string is not empty
        else {
            // for loop repeats password length times
            for (var i = 0; i < passLength; i++) {
                // if the counter is equal to the previously determined indices,
                // add the previously determined characters at that index
                if (i === lowerIndex) {
                    finalPassword += lowerChar;
                } else if (i === upperIndex) {
                    finalPassword += upperChar;
                } else if (i === numberIndex) {
                    finalPassword += numberChar;
                } else if (i === specialIndex) {
                    finalPassword += specialChar;
                }
                // otherwise, just add a random character from the final string
                else {
                    finalPassword += finalString.charAt(
                        Math.floor(Math.random() * finalString.length)
                    );
                }
            }
            // return the final password to be displayed to the user
            return finalPassword;
        }
    }
    // if user input is not 8 to 128, return an error
    else {
        alert("Invalid password length");
        return "Invalid password length";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

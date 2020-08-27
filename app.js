// Variable declaration
var passwordDisplay = document.getElementById('password');
var passLengthInput = document.getElementById('passLength');
var generatePassBtnEl = document.getElementById('generatePassBtn');
var copyPassBtnEl = document.getElementById('copyPassBtn');

var uppercaseCheckBoxEl = document.getElementById('includeUppercase');
var lowercaseCheckBoxEl = document.getElementById('includeLowercase');
var numberCheckBoxEl = document.getElementById('includeNumbers');
var symbolCheckBoxEl = document.getElementById('includeSymbols');

var uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var numberCharSet = "0123456789";
var symbolCharSet = `¬¦!"£$%^&*()_+-={}[];:'@#~,<.>/?`;

var charSet = "";

// Function declaration
function checkPassValue() {
    if (passwordDisplay.value == "") {
        passwordDisplay.disabled = true;
    } else {
        passwordDisplay.disabled = false;
    }
}

function generatePassword() {
    var charSet = generateCharSet();
    var password = '';
    if (passLengthInput.value <= 8) {
        passLengthInput.value = 8;
    }
    for (var i = 0; i < passLengthInput.value; i++) {
        var randomPosition = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(randomPosition, randomPosition + 1);
    }
    passwordDisplay.value = password;
    return password;
}

function generateCharSet() {
    var charset = "";
    if (uppercaseCheckBoxEl.checked == true) {
        charset = uppercaseCharSet;
    }
    if (lowercaseCheckBoxEl.checked == true) {
        charset += lowercaseCharSet;
    }
    if (numberCheckBoxEl.checked == true) {
        charset += numberCharSet;
    }
    if (symbolCheckBoxEl.checked == true) {
        charset += symbolCharSet;
    }
    if (uppercaseCheckBoxEl.checked == false && lowercaseCheckBoxEl.checked == false && numberCheckBoxEl.checked == false && symbolCheckBoxEl.checked == false) {
        charset = uppercaseCharSet + lowercaseCharSet + numberCharSet + symbolCharSet;
    }
    return charset;
}

function copyToClipboard() {
    passwordDisplay.select();
    document.execCommand("copy");
    alert('Copied password to clipboard');
}

// Call functions and event listeners
document.addEventListener("click", checkPassValue);
generatePassBtnEl.addEventListener("click", generatePassword);
copyPassBtnEl.addEventListener("click", copyToClipboard);
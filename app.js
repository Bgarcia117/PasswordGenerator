// Generator Functions

// Fuction that returns a random index (number) of a string value that is passed in as an argument
function randomIndex(str) {
    return Math.floor(Math.random() * str.length)
}

// Functions that returns a random letter using a random index in the "letter" string variable
function randomLetter() {
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    letter[randomIndex(letters)]; 
}

function getRandomUpper() {
    // Running the "randomLetter" function to create a random letter and setting that value to the letter variable
    const letter = randomLetter();
    // Changing the letter to an Uppercase letter an returning it from the function
    letter.toUpperCase();
}

function getRandomLower() {
    // Running the "randomLetter" function to create a random letter and returning it from the function
    return randomLetter();
}

function getRandomNumber(){
    const numbers = `1234567890`;
    // Return a random number using a random index in the "numbers" string
    numbers[randomIndex(numbers)];
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    // Returning a random symbol using a random index in the "symbols" string
    return symbols[randomIndex(symbols)]
}
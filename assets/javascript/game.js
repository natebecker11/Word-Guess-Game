//Global variables

    // Array of possible words (wrdList)
    const wrdList = ['goblin', 'orc', 'kobold', 'beholder', 'demogorgon', 'medusa', 'harpy', 'skeleton', 'zombie', 'revenant', 'troglodyte']
    
    // Array of letters of alphabet (azList)
    const azList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    // Source word
    var srcWord = '';

    // Display word
    var disWord = '';

    // Number of guesses left
    var triesLeft = 12;

    // Guessed wrong letters
    var guessedWrong = [];

    // Guessed right letters
    var guessedRight = [];

    // Experimental object for disWord
    var disObj = {       
    };

    // Experimental array for displayed word
    var disArray = [];

//Global functions

//Random integer generator less than max
var randomInt = function(max) {
    return Math.floor(Math.random() * max);
}

// Function to refresh the display in wordbox
var refreshWord = function() {
    //Create array for display from object
    disArray = Object.values(disObj);
    
    //Create a string from the array for display
    disWord = disArray.join('');

    //Send the new display word to the word box
    document.getElementById("wordBox").innerText = disWord;
}

// Function to restart the game on spacebar
var gameStart = function() {
    
    //Create source word by picking a random word from wrdList
    srcWord = wrdList[randomInt(wrdList.length)];

    //Create string for displaying underscores equal to srcWord length
    // disWord = "_";
    // for (let i = 0; i < srcWord.length - 1; i++) {
    //     disWord = disWord.concat(" _");
    // }

    //Create object representing underscores for displayed word
    for (let i = 0; i < srcWord.length; i++) {
        disObj[i] = "_ "
    }

    //Display the word
    refreshWord();
    

    //Reset the number of guesses to 12
    triesLeft = 12;

    //Change the text of the instruction box
    document.getElementById("instBox").innerText = "Press any letter to guess that letter!";
    document.getElementById("instBox2").innerText = "Press spacebar to restart!";
    
    document.getElementById("debugBox").innerText = srcWord;
}

// // Press spacebar to start or restart the game
// document.onkeyup = function(event) {
//     if (event.key === ' ') {
//         //Create source word by picking a random word from wrdList
//         srcWord = wrdList[randomInt(wrdList.length)];

//         //Create string for displaying underscores equal to srcWord length
//         disWord = "_";
//         for (let i = 0; i < srcWord.length - 1; i++) {
//             disWord = disWord.concat(" _");
//         }

//         //Reset the number of guesses to 12
//         triesLeft = 12;

//         //Change the text of the instruction box
//         document.getElementById("instBox").innerText = "Press any letter to guess that letter!";
//         document.getElementById("instBox2").innerText = "Press spacebar to restart!";
//         document.getElementById("wordBox").innerText = disWord;
//         document.getElementById("debugBox").innerText = srcWord;

//     }
// }



//On user keyup, do some things
document.onkeyup = function(event) {
    //  Transform the key to lowercase
    var keyPress = event.key.toLowerCase();
    //  Start or restart the game if the key was space
    if (keyPress === ' ') gameStart();   
    //  If keyPress isn't a letter, or has been guessed, return
    else if (!azList.includes(keyPress) || guessedWrong.includes(keyPress) || guessedRight.includes(keyPress)) {
        return;
    }
    //  If the key press is a value within srcWord    
    if (srcWord.includes(keyPress)) {
        // push the letter to the array of guessed letters
        guessedRight.push(keyPress);   
        // Iterate through every letter of srcWord looking for the guessed letter
        let i = 0;
        for (let letter of srcWord) {            
            if (letter === keyPress) {
                disObj[i] = keyPress;

                
            }
            i++;
        }
        // if the keypress is the value, change the corresponding key/value in disWord
        // Update the display
        refreshWord();
    }

    
        

    //  Else 
        // Push the keyPress to guessedWrong
        // Decrement triesLeft by 1
        // If triesLeft <= 0 restart the game
}
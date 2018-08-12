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


//Global functions

//Random integer generator less than max
var randomInt = function(max) {
    return Math.floor(Math.random() * max);
}



// Press spacebar to start or restart the game
document.onkeyup = function(event) {
    if (event.key === ' ') {
        //Create source word by picking a random word from wrdList
        srcWord = wrdList[randomInt(wrdList.length)];

        //Create string for displaying underscores equal to srcWord length
        disWord = "_";
        for (let i = 0; i < srcWord.length - 1; i++) {
            disWord = disWord.concat(" _");
        }

        //Reset the number of guesses to 12
        triesLeft = 12;

        //Change the text of the instruction box
        document.getElementById("instBox").innerText = "Press any letter to guess that letter!";
        document.getElementById("instBox2").innerText = "Press spacebar to restart!";
        document.getElementById("wordBox").innerText = disWord;
        document.getElementById("debugBox").innerText = srcWord;

    }
}




// Create 'Source Word' (srcWord) object with the each letter of the word as a key/value pair



















//Create an array with the guessed wrong letters (guessedWrong)

//Create an array with the guessed right letters (guessedRight)








//On user keyup, do some things
    //  If the lowercase of the pressed key isn't within array a-z, return
    //  
    //  If the lowercase of the pressed key is within guessedWrong, return
    //  
    //  If the lowercase of the pressed key is within guessedRight, return
    //  If the key press is a value within srcWord
        // push the letter to guessedRight
        // Iterate through every letter of srcWord
        // if the keypress is the value, change the corresponding key/value in disWord
    //  Else 
        // Push the lowercase of the pressed key to guessedWrong
        // Decrement triesLeft by 1
        // If triesLeft <= 0 restart the game
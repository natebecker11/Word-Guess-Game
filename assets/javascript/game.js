//Global variables

    // Array of possible words (wrdList)
    // Array of letters of alphabet (azList)
    // Variable for guesses remaining (triesLeft)



// Pick a word from an array of words


// Create 'Source Word' (srcWord) object with the each letter of the word as a key/value pair








// Create a line of underscores equal to word length
    //  Create a 'Display Word' (disWord) object with the number of underscores as the current word as key/value pair, eg 0: '_', 1: '_' etc









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
        // Iterate through every key/value pair of srcWord
        // if the keypress is the value, change the corresponding key/value in disWord
    //  Else 
        // Push the lowercase of the pressed key to guessedWrong
        // Decrement triesLeft by 1
        // If triesLeft <= 0 restart the game
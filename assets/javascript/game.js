//Global variables

    // Array of possible words 
    const wrdList = [
        {name: 'goblin', img: 'assets/images/goblin.jpg'}, 
        {name: 'orc', img: 'assets/images/orc.jpg'},
        {name: 'kobold', img: 'assets/images/kobold.jpg'}, 
        {name: 'beholder', img: 'assets/images/beholder.jpg'}, 
        {name: 'demogorgon', img: 'assets/images/demogorgon.jpg'}, 
        {name: 'medusa', img: 'assets/images/medusa.jpg'}, 
        {name: 'harpy', img: 'assets/images/harpy.jpg'}, 
        {name: 'skeleton', img: 'assets/images/skeleton.jpg'}, 
        {name: 'zombie', img: 'assets/images/zombie.jpg'}, 
        {name: 'revenant', img: 'assets/images/revenant.jpg'}, 
        {name: 'troglodyte', img: 'assets/images/troglodyte.jpg'}
    ]
    
    // Array of letters of alphabet 
    const azList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    // Source object
    var srcObject = {};

    // Source word
    var srcWord = '';

    // Source image
    var srcImage = '';

    // Display word
    var disWord = '';

    // Number of guesses left
    var triesLeft = 12;

    // Guessed wrong letters
    var guessedWrong = [];

    // String for guessed wrong letters
    var guessedWrongStr = '';

    // Guessed right letters
    var guessedRight = [];

    // Experimental object for disWord
    var disObj = {       
    };

    // Experimental array for displayed word
    var disArray = [];

    // Number of wins
    var wins = 0;

    // Flag for whether the game is over
    var gameOver = true;

//Global functions








//Random integer generator less than max
var randomInt = function(max) {
    return Math.floor(Math.random() * max);
}

// Function to display image upon game win

// var dispImage = function(sourceObject) {
//     document.getElementById("imgBox").innerHTML = `<img src=${sourceObject.img} alt="Picture of a monster" class="img-responsive monster-image">`;
// }

//Alternate method for image insertion

var dispImage = function(sourceObject) {
    var imgDiv = document.querySelector('#imgBox');
    var imgMon = document.createElement('img');
    imgMon.src = `${sourceObject.img}`;
    imgMon.id = 'monsterPic';
    imgDiv.appendChild(imgMon);
}


// Alternate method for clearing the image

var clearImage = function() {
    if (gameOver = false) return;
    else {
    var imgMon = document.querySelector('#monsterPic');
    imgMon.parentNode.removeChild(imgMon);
    };
}

// Function to clear the image on a new game

// var clearImage = function() {
//     document.getElementById("imgBox").innerHTML = '';
// }

// Function to refresh global variables
var refreshVars = function() {
    srcWord = '';
    srcObject = {};
    srcImage = '';
    disWord = '';
    triesLeft = 12;
    guessedWrong = [];
    guessedWrongStr = '';
    guessedRight = [];
    disObj = {};
    disArray = [];

}

// Function to refresh the display in the guessBox
var refreshTries = function() {
    document.getElementById("guessBox").innerText = triesLeft;
}

// Function to refresh the display in wordBox
var refreshWord = function() {
    //Create array for display from object
    disArray = Object.values(disObj);
    
    //Create a string from the array for display
    disWord = disArray.join('');

    //Send the new display word to the word box
    document.getElementById("wordBox").innerText = disWord;
}

// Function to refresh the display in lettersBox
var refreshLetters = function() {
    //Create a string from the guessedWrong array
    guessedWrongStr = guessedWrong.join();
    document.getElementById("lettersBox").innerText = guessedWrongStr;
    
}

// Function to announce something
var announcer = function(message) {
    document.getElementById("announceBox").innerText = message;
}

// Function to refresh the number of displayed wins
var refreshWins = function() {
    document.getElementById("winBox").innerText = wins;
}
// Function to check the winner of the game
var checkWinner = function() {
    refreshWord();
    if (srcWord === disWord) {
        wins++;
        announcer(`That's win number ${wins}! Way to go! Press spacebar to play again!`);
        dispImage(srcObject);
        // document.getElementById("announceBox").innerText = `That's win number ${wins}! Way to go! Press spacebar to play again!`;
        gameOver = true;
        refreshWins();
        // gameStart();
    }
}

// Function to check if you lost
var checkLoser = function() {
    if (triesLeft === 0) {
        gameOver = true;
        announcer(`Sorry, you lost! The word was ${srcWord}! Press spacebar to play again!`)
    }
}
// Function to clear the announcements
var refreshAnn = function() {
    // document.getElementById("announceBox").innerText = '';
    announcer('');
}

// Function to restart the game on spacebar press
var gameStart = function() {

    //Reset everything
    refreshVars();
    refreshWins();
    refreshAnn();
    refreshLetters();
    clearImage();
    gameOver = false;

    //Creat source object by picking a random object from wrdList
    srcObject = wrdList[randomInt(wrdList.length)];
    
    //Create source word by picking a random word from wrdList
    // srcWord = wrdList[randomInt(wrdList.length)];

    //Define source word and source image
    srcWord = srcObject.name;
    srcImage = srcObject.img;



    //Create object representing underscores for displayed word
    for (let i = 0; i < srcWord.length; i++) {
        disObj[i] = "_ "
    }

    //Display the word
    refreshWord();
    

    //Display the number of tries   
    refreshTries();

    //Change the text of the instruction box
    document.getElementById("instBox").innerText = "Press any letter to guess that letter!";
    document.getElementById("instBox2").innerText = "Press spacebar to restart!";

    //Debugging helper for development to see the right answer AKA cheating!!
    // document.getElementById("debugBox").innerText = srcWord;
}



//  Main game function
document.onkeyup = function(event) {
    //  Transform the key to lowercase
    var keyPress = event.key.toLowerCase();
    //  Start or restart the game if the key was space
    if (keyPress === ' ') gameStart(); 
    // Check if the game is over
    else if (gameOver) {return}  
    //  If keyPress isn't a letter, or has been guessed, return
    else if (!azList.includes(keyPress) || guessedWrong.includes(keyPress) || guessedRight.includes(keyPress)) {
        return;
    }
    //  If the key press is a value within srcWord    
    else if (srcWord.includes(keyPress)) {
        // push the letter to the array of guessed letters
        guessedRight.push(keyPress);   
        // Iterate through every letter of srcWord looking for the guessed letter
        let i = 0;
        for (let letter of srcWord) {
            // if the keypress is the value, change the corresponding key/value in disObj            
            if (letter === keyPress) {
                disObj[i] = keyPress;                
            }
            i++;
        }        
        // Update the display
        refreshWord();            
    }
    // All other key presses are wrong letters 
    else {
        // push the keyPress to guessedWrong and refresh
        guessedWrong.push(keyPress);
        refreshLetters();
        // Decrement triesLeft by 1, and refresh the display
        triesLeft--;
        refreshTries();
    }
    //Check to see if you've won
   
    checkWinner();
    //Check to see if you've lost
    checkLoser();
}
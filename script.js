'use strict'

let score = 20;                                                             // Default score variable
let highscore = 0;                                                          // Default highscore variable
let hiddenNumber = Math.trunc(Math.random() * 20) + 1;                      // Random number selector
let gameOn = true;                                                          // Game ON / OFF variable
const checkBtn = document.querySelector('.check');                          // Check Button
const againBtn = document.querySelector('.again');                          // Again Button
const theNumber = document.querySelector('.number');                        // Hidden number object
const progressText = document.querySelector('.message');                    // Game info text update
const scoreInfo = document.querySelector('.score');                         // Game score info update
const maxScore = document.querySelector('.highscore');                      // Game Highscore info update
//------------------------------------------------------GAME MECHANIC---------------------------------------------------------------------------
const checkNumber = function (number) {                                     // Checks the number entered by the user
    if (number === 0) {                                                     // If there is no number in the input field or the number is 0
        progressText.textContent = "No number...";                          // The game Text Info will update acordingly
    } else if (number < 0) {                                                // If the number is less than 0
        progressText.textContent = "Must be higher than 0"                  // The game Text Info will update acordingly
    } else if (number === hiddenNumber) {                                   // If the number is equal to the randomly selected one
        document.body.style.backgroundColor = "#60b347";                    // Background turns green
        theNumber.innerHTML = `<strong>${hiddenNumber}</strong>`;           // The hidden number is revealed
        progressText.textContent = "Correct number!!!";                     // The game Text Info will update acordingly
        gameOn = false;                                                     // The game is turned off

        if (score > highscore) {                                            // If the score you obtained is higher than the default highscore
            highscore = score;                                              // The current score will be the new highscore
            maxScore.textContent = `Highscore: ${highscore}`                // The game Highscore Text will update acordingly
        }

    } else if (number < hiddenNumber) {                                     // If the number is less than the randomly selected one
        --score;                                                            // Your score will drop by 1
        progressText.textContent = "Too low...";                            // The game Text Info will update acordingly
        scoreInfo.textContent = `Score: ${score}`                           // The game Score Info will update acordingly
    } else {                                                                // If the number is higher than the randomly selected one
        --score;                                                            // Your score will drop by 1
        progressText.textContent = "Too high...";                           // The game Text Info will update acordingly
        scoreInfo.textContent = `Score: ${score}`                           // The game Score Info will update acordingly
    }
}
//------------------------------------------------------GAMEPLAY-------------------------------------------------------------------------------------------
checkBtn.addEventListener('click', function () {                            // Check Button

    if (gameOn) {                                                           // As long as the game is still ON
        let userGuess = Number(document.querySelector('.guess').value);     // The 'userGuess' variable will be updated everytime the check button is clicked on

        checkNumber(userGuess);

        if (score <= 0) {                                                   // If your in game score hits 0
            progressText.textContent = "You lost the game!";                // The game Text Info will update acordingly
            gameOn = false;                                                 // Game will be turned OFF
        }
    }
})
//------------------------------------------------------NEW GAME-------------------------------------------------------------------------------------------
againBtn.addEventListener('click', function () {                            // Again button
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;                      // Generates another hidden number
    theNumber.innerHTML = `<strong>?</strong>`;                             // Hides the number if it was revealed
    document.querySelector('.guess').value = '';                            // Cleares the input field
    progressText.textContent = 'Start guessing...';                         // The game Text Info is reset
    scoreInfo.textContent = 'Score: 20';                                    // The game Score Info is reset
    document.body.style.backgroundColor = '#222';                           // Background color is reset
})

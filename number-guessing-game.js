// Number guessing game!

// In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use capabilities from NodeJS and any external module. HINT: there is an npm library called prompt that can help you with that :)
// Save/commit/push

// Generate a random number between 1 and 100. Using the browser functions prompt and alert, ask the user to guess the number. You
// should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or lower. If they guess right,
// congratulate them. Otherwise, give them a message saying what the correct number was, as well as their list of guesses.


var prompt = require('prompt');

function numb(min, max) {
    return Math.random() * (max - min) + min;
};


function guessNumbGame() {
    var theNumb = Math.floor(numb(1, 100));
    var i = 0;

    function guessANumber() {

        prompt.get('GuesstheNumber', function(err, response) {
            var guessedNumber = Number(response.GuesstheNumber);
            
            if (err) {
                console.log("Error");
                guessANumber();
            }
            else { 
            if (i === 4) {
                console.log("You are bad at guessing, your game is up")
            };
            if (isNaN(guessedNumber) !== true) {
                console.log("Hey! That's not a number, try again");
                guessANumber();

            }
            if (guessedNumber > theNumb) {
                console.log("Hey! Your number is too high asshole!");
                i++;
                guessANumber();

            }
            if (guessedNumber < theNumb) {
                console.log("Hey! Your number is so fucking low idiot! You'd have better luck fingering yourself");
                i++;
                guessANumber();
            }

            if (guessedNumber === theNumb) {
                console.log("You did it..You must be a Witch!!! BURN IN HELL");

            }
        }
            
        })
    }
    guessANumber();
};

guessNumbGame();

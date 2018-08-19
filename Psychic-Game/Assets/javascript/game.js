
// //<!-- game start when user makes a choice by clicking a letter key
// capture that choice
// computer generates a choice
// compair these two choices
// if a win (match) player wins, win points increase by one
// then game will reset and start over
// if no match, it is a loss and the number of tries is reduced by one point
// when number of tries reaches 0, player looses and game resets
// diplay the result to the user, wins, losses, letters guessed --> 




//variables for tracking players wins,losses, guesses remaining, letters guessed, comp guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = []; 
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer letter
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
//click event
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);
    
//if player guess is equil to computer, wins increase one point, starts with 9 chances
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
//player guess does not match comptuer guesses left is reduced by one
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}
//losses increase by one
else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

}
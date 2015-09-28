////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    var winner;  
    if (playerMove == 'rock') {
    	switch(computerMove) {
    		case 'rock':
    			winner = 'tie';
    			break;
    		case 'paper':
    			winnter = 'computer';
    			break;
    		case 'scissors':
    			winner = 'player';
    			break;
    	}		
    } else if (playerMove == 'paper') {
    	switch(computerMove) {
    		case 'rock':
    			winner = 'player';
    			break;
    		case 'paper':
    			winnter = 'tie';
    			break;
    		case 'scissors':
    			winner = 'computer';
    			break;
    	}		
    } else if (playerMove == 'scissors') {
    	switch(computerMove) {
    		case 'rock':
    			winner = 'computer';
    			break;
    		case 'paper':
    			winnter = 'player';
    			break;
    		case 'scissors':
    			winner = 'tie';
    			break;
    	}		
    } else {
    	console.log("something went wrong");
    };
    return winner;
}

function playToFive(playerMove, computerMove) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // play until 5 wins
    while (playerWins<5 || computerWins<5) {
    
    	// print moves chosen
    	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    	
    	// determine winner and increment score
    	if (getWinner(playerMove, computerMove) = 'player') {
    		playerWins++;
    	} else if (getWinner(playerMove, computerMove) = 'computer') {
    		computerWins++;
    	} else { 						//in case of tie
    		playerWines++;
    		computerWins++;
    	};
    	
    	// print score
    	console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    };
    
    // print final score and return
    console.log('The final score is Player:' + playerWins + ' to Computer:' + computerWins + '\n');
    return [playerWins, computerWins];
}


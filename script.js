alert('Ready to play papper, rock & scissors? Tip: check the results of each round at the console ( press F12)')

//Computer randomly chooses Rock, Paper or Scissor
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];
    let randomizeChoice = Math.floor(Math.random() * choices.length);
    
    return choices[randomizeChoice]
}

//Setting the results of what beats what based on user's and computer's choices
function playRound(playerSelection, computerSelection) {
    
    let player1 = playerSelection;
    let player2 = computerSelection;
    let roundResult = [];

    switch (player1){
    
        case 'paper':
            if (player2 === "rock"){
                roundResult = ['player1', 'paper', 'rock'];
            } if (player2 === "scissors"){
                roundResult = ['player2', 'scissors', 'paper'];
            } if (player2 === "paper"){
                roundResult ['tie', 'paper'];
            }
            return roundResult;
        case 'rock':
            if (player2 === "scissors"){
                roundResult = ['player1', 'rock', 'scissors'];
            } if (player2 === "paper"){
                roundResult = ['player2', 'paper', 'rock'];
            } if (player2 === "rock"){
                roundResult = ['tie', 'rock'];
            }
            return roundResult;
        case 'scissors':
            if (player2 === "paper"){
                roundResult = ['player1', 'scissors', 'paper'];
            } if (player2 === "rock"){
                roundResult = ['player2', 'rock', 'scissors'];
            } if (player2 === "scissors"){
                roundResult = ['tie', 'scissors'];
            }
            return roundResult;
    }
}

//here is where 5 rounds of the game happens, and the result is announced
function game(){
    
    let player1;
    let player2;
    let roundResult;
    let player1Score = 0;
    let player2Score = 0;
    let tieScore = 0;

    for (let i = 0; i < 5; i++) {
        player1 = window.prompt('Type your choice: rock, paper or scissors?').toLowerCase();
        player2 = computerPlay();

        while(player1 !== "rock"&&
        player1 !== "paper"&&
        player1 !== "scissors"){
            alert("Sorry, this is not a valid choice. You must tipe 'rock', 'paper' or 'scissors'! ;)")
            player1 = window.prompt('Type your choice: rock, paper or scissors?').toLowerCase();
        }

        roundResult = playRound(player1, player2);

        switch (roundResult[0]){
            case "player1":
                player1Score += 1;
                console.log(`You win! ${roundResult[1]} beats ${roundResult[2]}`)
                break;
            case "player2":
                player2Score += 1;
                console.log(`You lose! ${roundResult[1]} beats ${roundResult[2]}`)
                break;
            case "tie":
                tieScore += 1;    
                console.log(`Both players have chosen ${roundResult[1]}. It's a tie!`)
        }
        
    }

    if (player1Score > player2Score){
        console.log(`Congratulations! You win by ${player1Score} X ${player2Score},
         with ${tieScore} ties.`)
    }
    if (player2Score > player1Score){
        console.log(`Bummer! You lost by ${player1Score} X ${player2Score},
        with ${tieScore} ties.`)
    }
    if (player2Score == player1Score){
        console.log(`You and the computer are tied. The final score is 
        ${player1Score} X ${player2Score}, with ${tieScore} ties. Try again! (F5)`)
    }

}

game()



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

    switch (player1){
    
        case 'paper':
            if (player2 === "rock"){
                console.log("You win!");
                return "player1";
            } if (player2 === "scissors"){
                console.log("You lost!");
                return "player2";
            } if (player2 === "paper"){
                console.log("It's a tie!");
                return "tie";
            }
            break;
        case 'rock':
            if (player2 === "scissors"){
                console.log("You win!");
                return "player1";
            } if (player2 === "paper"){
                console.log("You lost!");
                return "player2";
            } if (player2 === "rock"){
                console.log("It's a tie!");
                return "tie";
            }
            break;
        case 'scissors':
            if (player2 === "paper"){
                console.log("You win!");
                return "player1";
            } if (player2 === "rock"){
                console.log("You lost!");
                return "player2";
            } if (player2 === "scissors"){
                console.log("It's a tie!");
                return "tie";
            }
            break;   
    }
}

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

        switch (roundResult){
            case "player1":
                player1Score += 1;
                break;
            case "player2":
                player2Score += 1;
                break;
            case "tie":
                tieScore += 1;    
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
        ${player1Score} X ${player2Score}. Try again!`)
    }
    
    return "This game is over!"
}




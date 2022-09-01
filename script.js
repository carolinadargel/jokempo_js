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
                roundResult = ['player2', 'paper', 'scissors'];
            } if (player2 === "paper"){
                roundResult = ['tie', 'paper', 'paper'];
            }
            return roundResult;
        case 'rock':
            if (player2 === "scissors"){
                roundResult = ['player1', 'rock', 'scissors'];
            } if (player2 === "paper"){
                roundResult = ['player2', 'rock', 'paper'];
            } if (player2 === "rock"){
                roundResult = ['tie', 'rock', 'rock'];
            }
            return roundResult;
        case 'scissors':
            if (player2 === "paper"){
                roundResult = ['player1', 'scissors', 'paper'];
            } if (player2 === "rock"){
                roundResult = ['player2', 'scissors', 'rock'];
            } if (player2 === "scissors"){
                roundResult = ['tie', 'scissors', 'scissors'];
            }
            return roundResult;
    }
};

//here is where 5 rounds of the game happens, and the result is saved
function game(){
    
    let player1;
    let player2;
    let roundResult;
    let player1Score = 0;
    let player2Score = 0;
    let tieScore = 0;

    for (let i = 0; i < 5; i++) {
        player1 = window.prompt(`Round ${i + 1} out of 5. Type your choice: rock, paper or scissors?`).toLowerCase();
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
                break;
            case "player2":
                player2Score += 1;
                break;
            case "tie":
                tieScore += 1;    
                break;
        }

        printRound(i, roundResult[0], roundResult[1], roundResult[2], player1Score, player2Score, tieScore)
                    
    }
                
    return [player1Score, player2Score, tieScore]
                
};
            

//print each round
function printRound(i, roundResult0, roundResult1, roundResult2, player1Score, player2Score, tieScore){
               
    
    console.log(`ROUND #${i + 1}`)
    console.log(`Your Selection: ${roundResult1}`);
    console.log(`Computers Selection: ${roundResult2}`);

    if (roundResult0 == 'player1') {
       console.log(`-----> You win! ${roundResult1} beats ${roundResult2}<-----`);
    } else if (roundResult0 == 'player2') {
        console.log(`-----> You lose! ${roundResult2} beats ${roundResult1}<-----`);
    } else if (roundResult0 == 'tie'){
        console.log(`-----> Both players have chosen ${roundResult1}. It's a tie!<-----`);
    }
    console.log(`Your score: ${player1Score}`)
    console.log(`Computer's score: ${player2Score}`);
    console.log(`Draw: ${tieScore}`);
    

    if (i === 4){
        finalScore(player1Score, player2Score, tieScore);
        return
    }

    console.log('======================================================');

};

//print final result after 5 rounds
function finalScore(player1FinalScore, player2FinalScore, drawScore) {
    
    console.log('###########################################################');
    console.log("FINAL SCORE")
    console.log(`Your score: ${player1FinalScore}`)
    console.log(`Computer's score: ${player2FinalScore}`);
    console.log(`Draw: ${drawScore}`);

    if (player1FinalScore > player2FinalScore){
        console.log(`Congratulations! You win by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties.`);
        alert(`Congratulations! You win by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Check the complete result at the console`);
    }
    if (player2FinalScore > player1FinalScore){
        console.log(`Bummer! You lost by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties.`);
        alert(`Bummer! You lost by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Check the complete result at the console`);
    }
    if (player2FinalScore == player1FinalScore){
        console.log(`You and the computer are tied. The final score is 
        ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Try again!`);
        alert(`You and the computer are tied. The final score is 
        ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Try again! Check the complete result at the console`);

    }
    console.log('###########################################################');
};

game();
//CHOICES
const ROCK_CHOICE = "rock";
const PAPER_CHOICE = "paper";
const SCISSORS_CHOICE = "scissors";
const CHOICES = [ROCK_CHOICE, PAPER_CHOICE, SCISSORS_CHOICE];

//RESULTS
const PLAYER1_RESULT = "player1";
const PLAYER2_RESULT = "player2";
const TIE_RESULT = "tie";

//CONSOLE_DIVS
const DIV1 = "======================================================";
const DIV2 = "###########################################################";


//Computer randomly chooses Rock, Paper or Scissor
function computerPlay() {
    let randomizeChoice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randomizeChoice]
}    


//Setting the results of what beats what based on user's and computer's choices
function playRound(playerSelection, computerSelection) {   
    let player1 = playerSelection;
    let player2 = computerSelection;
    let roundResult;    
    if (player1 === player2){
        roundResult = TIE_RESULT;
    }else if (player1 === ROCK_CHOICE && player2 === SCISSORS_CHOICE ||
        player1 === PAPER_CHOICE && player2 === ROCK_CHOICE ||
        player1 === SCISSORS_CHOICE && player2 === PAPER_CHOICE){
            roundResult = PLAYER1_RESULT;           
    } else if (player1 === ROCK_CHOICE && player2 === PAPER_CHOICE ||
            player1 === PAPER_CHOICE && player2 === SCISSORS_CHOICE ||
            player1 === SCISSORS_CHOICE && player2 === ROCK_CHOICE){
                roundResult = PLAYER2_RESULT;
    }
    return [roundResult, player1, player2]
};


//Run 5 rounds and save score
function game(){       
    let player1Choice;
    let player2Choice;
    let roundResult;
    let score = {player1: 0,
                player2: 0,
                tie: 0};   
    for (let i = 0; i < 5; i++) {
        player1Choice = window.prompt(`Round ${i + 1} out of 5. Type your choice: rock, paper or scissors?`).toLowerCase();
        while(player1Choice !== ROCK_CHOICE &&
            player1Choice !== PAPER_CHOICE &&
            player1Choice !== SCISSORS_CHOICE) {
                alert("Sorry, this is not a valid choice. You must tipe 'rock', 'paper' or 'scissors'! ;)")
                player1Choice = window.prompt('Type your choice: rock, paper or scissors?').toLowerCase();
            }
        player2Choice = computerPlay();
        roundResult = playRound(player1Choice, player2Choice);     
        point = roundResult[0]
        score[roundResult[0]] += 1;        
        printRound(i, roundResult[0], roundResult[1], roundResult[2], score.player1, score.player2, score.tie)                   
    }                
};

//print each round
function printRound(i, roundResult0, roundResult1, roundResult2, player1Score, player2Score, tieScore){       
    console.log(`ROUND #${i + 1}`)
    console.log(`Your Selection: ${roundResult1}`);
    console.log(`Computers Selection: ${roundResult2}`);
    if (roundResult0 == PLAYER1_RESULT) {
        console.log(`-----> You win! ${roundResult1} beats ${roundResult2} <-----`);
    } else if (roundResult0 == PLAYER2_RESULT) {
        console.log(`-----> You lose! ${roundResult2} beats ${roundResult1} <-----`);
    } else if (roundResult0 == TIE_RESULT){
        console.log(`-----> Both players have chosen ${roundResult1}. It's a tie! <-----`);
    }
    console.log(`Your score: ${player1Score}`)
    console.log(`Computer's score: ${player2Score}`);
    console.log(`Draw: ${tieScore}`);
    if (i === 4){
        finalScore(player1Score, player2Score, tieScore);
        return
    }
    console.log(DIV1);
};

//print final result after 5 rounds
function finalScore(player1FinalScore, player2FinalScore, drawScore) {
    console.log(DIV2);
    console.log("FINAL SCORE")
    console.log(`Your score: ${player1FinalScore}`)
    console.log(`Computer's score: ${player2FinalScore}`);
    console.log(`Draw: ${drawScore}`);
    if (player1FinalScore > player2FinalScore){
        console.log(`Congratulations! You win by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties.`);
        alert(`Congratulations! You win by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties.
        Check the complete result at the console`);
        
    }else if (player2FinalScore > player1FinalScore){
        console.log(`Bummer! You lost by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties.`);
        alert(`Bummer! You lost by ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. 
        Check the complete result at the console`);
        
    }else if (player2FinalScore == player1FinalScore){
        console.log(`You and the computer are tied. The final score is 
        ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Try again!`);
        alert(`You and the computer are tied. The final score is 
        ${player1FinalScore} X ${player2FinalScore}, with ${drawScore} ties. Try again! Check the complete result at the console`);
    }
    console.log(DIV2);
};

alert('Ready to play papper, rock & scissors? Tip: check the results of each round at the console')
game();
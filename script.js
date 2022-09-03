//CHOICES
const CHOICE = {rock: 'rock',
                paper: 'paper',
                scissors: 'scissors'};

//RESULTS
const RESULT = {player1: 'player1',
                player2: 'player2',
                tie: 'tie'};

//CONSOLE_DIVS
const DIV1 = '======================================================';
const DIV2 = '###########################################################';


//Computer randomly chooses Rock, Paper or Scissor
function computerPlay() {
    let choices = [CHOICE.rock, CHOICE.paper, CHOICE.scissors];
    let randomizeChoice = Math.floor(Math.random() * 3);
    return choices[randomizeChoice]
}    


//Setting the results of what beats what based on user's and computer's choices
function playRound(playerSelection, computerSelection) {   
    let player1 = playerSelection;
    let player2 = computerSelection;
    let roundResult;    
    if (player1 === player2) roundResult = RESULT.tie;
    else if (player1 === CHOICE.rock && player2 === CHOICE.scissors ||
        player1 === CHOICE.paper && player2 === CHOICE.rock ||
        player1 === CHOICE.scissors && player2 === CHOICE.paper) roundResult = RESULT.player1;           
    else if (player1 === CHOICE.rock && player2 === CHOICE.paper ||
            player1 === CHOICE.paper && player2 === CHOICE.scissors ||
            player1 === CHOICE.scissor && player2 === CHOICE.rock) roundResult = RESULT.player2;
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
        while(player1Choice !== CHOICE.rock &&
            player1Choice !== CHOICE.paper &&
            player1Choice !== CHOICE.scissors) {
                alert("Sorry, this is not a valid CHOICE. You must tipe 'rock', 'paper' or 'scissors'! ;)")
                player1Choice = window.prompt('Type your choice: rock, paper or scissors?').toLowerCase();
            }
        player2Choice = computerPlay();
        roundResult = playRound(player1Choice, player2Choice);     
        point = roundResult[0];
        score[roundResult[0]] += 1;        
        printRound(i, roundResult[0], roundResult[1], roundResult[2], score.player1, score.player2, score.tie);
    }                
};

//print each round
function printRound(i, roundResult0, roundResult1, roundResult2, player1Score, player2Score, tieScore){       
    console.log(`ROUND #${i + 1}`);
    console.log(`Your Selection: ${roundResult1}`);
    console.log(`Computers Selection: ${roundResult2}`);
    if (roundResult0 == RESULT.player1) console.log(`-----> You win! ${roundResult1} beats ${roundResult2} <-----`);
    else if (roundResult0 == RESULT.player2) console.log(`-----> You lose! ${roundResult2} beats ${roundResult1} <-----`);
    else if (roundResult0 == RESULT.tie) console.log(`-----> Both players have chosen ${roundResult1}. It's a tie! <-----`);
    console.log(`Your score: ${player1Score}`);
    console.log(`Computer's score: ${player2Score}`);
    console.log(`Draw: ${tieScore}`);
    if (i === 4){
        return finalScore(player1Score, player2Score, tieScore);
    }
    console.log(DIV1);
};

//print final result after 5 rounds
function finalScore(player1FinalScore, player2FinalScore, drawScore) {
    console.log(DIV2);
    console.log('FINAL SCORE');
    console.log(`Your score: ${player1FinalScore}`);
    console.log(`Computer's score: ${player2FinalScore}`);
    console.log(`Draws: ${drawScore}`);
    if (player1FinalScore > player2FinalScore) console.log(`Congratulations, you win! You rock!`);   
    else if (player2FinalScore > player1FinalScore) console.log(`Bummer... You lost! Maybe next time. ;)`);   
    else if (player2FinalScore == player1FinalScore) console.log(`You and the computer are tied. Try again!`);
    console.log(DIV2);
};

alert('Ready to play papper, rock & scissors? Tip: check your console');
game();
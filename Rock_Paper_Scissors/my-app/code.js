
var icons = ["icon://fa-hand-rock-o", "icon://fa-hand-paper-o", "icon://fa-hand-scissors-o"];

var choices = ["Rock", "Paper", "Scissors"];

var playerScore = 0;
var computerScore = 0;

onEvent("rockButton","click",function(){
  updateScreen("Rock");
});

onEvent("paperButton","click",function(){
  updateScreen("Paper");
});

onEvent("scissorsButton","click",function(){
  updateScreen("Scissors");
});

function updateScreen(playerChoice){
  
 
  var computerChoice = randomChoose(choices);
  var winner = decideWinner(playerChoice, computerChoice);

  setProperty("playerOutput","image",findIcon(playerChoice));
  setProperty("computerOutput","image", findIcon(computerChoice));

  
  // Update the screen with the text explaining who won.
  if(winner == "Draw"){
    setProperty("gameText","text","Draw!");
  } else if (winner == "Player") {
    setProperty("gameText","text","You win!");
    playerScore++;
    setProperty("playerScoreOutput","text",playerScore);
  } else if (winner == "Computer") {
    setProperty("gameText","text","Computer wins!");
    computerScore++;
    setProperty("computerScoreOutput","text",computerScore);    
  }
  
}

function findIcon(iconName){
    
    for (var i = 0;i<choices.length;i++){
      if (choices[i] == iconName){
         //console.log("1");
        return icons[i];
       
      }
    }
    
}

function randomChoose(list){
    var randomChoice = randomNumber(0, 2);
    
    return list[randomChoice];
}

function decideWinner(playerChoice, computerChoice){
  if (playerChoice === computerChoice) {
    return "Draw";
  } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Paper") ||(playerChoice === "Paper" && computerChoice === "Rock")) {
    return "Player";
  } else {
    return "Computer";
  }
}

    

// Business Logic -------
function Dice(number, totalScore, roundScore, id) {
    this.number = 0;
    this.totalScore = 0;
    this.roundScore = 0;
    this.id = id;
}

Dice.prototype.Roll = function() {
    this.number = Math.ceil(Math.random()*6);
}

Dice.prototype.PlayRound = function() {
    if (this.number !== 1) {
        this.roundScore += this.number;
    } if (this.number === 1) {
        this.roundScore = 0;
    }
    return this.roundScore;
}

Dice.prototype.TotalRound = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
}

Dice.prototype.DetermineWinner = function() {
    if(this.totalScore >= 100 ){
        console.log(this.totalScore);
        return this.totalScore;
    }
    return false;
}

// UI Logic -------
let dice1 = new Dice(0, 0, 0, 1);
let dice2 = new Dice(0, 0, 0, 2);

function displayPlayersScore(dice) {

  if(dice.id === 1) {
  const currentNumber1 = document.getElementById("p1-number");
  const roundScore1 = document.getElementById("p1-round-score");
  const totalScore1 = document.getElementById("p1-total-score");
  currentNumber1.innerText = dice.number;
  roundScore1.innerText = dice.roundScore;
  totalScore1.innerText = dice.totalScore;
  }

  if(dice.id === 2) {
  const currentNumber2 = document.getElementById("p2-number");
  const roundScore2 = document.getElementById("p2-round-score");
  const totalScore2 = document.getElementById("p2-total-score");
  currentNumber2.innerText = dice.number;
  roundScore2.innerText = dice.roundScore;
  totalScore2.innerText = dice.totalScore;
  }
}

window.addEventListener("load", function() {
  let playersDiv = document.getElementById("players");
  playersDiv.addEventListener("click", ButtonClick);
});

function ButtonClick(event) {
  
  if(event.target.id === "rematch") {
    location.reload();
  }

  if(event.target.id === "roll-dice-1") {
    dice1.Roll();
    dice1.PlayRound();
    displayPlayersScore(dice1);
  } else

  if(event.target.id === "hold-dice-1") {
    dice1.TotalRound();
    displayPlayersScore(dice1);
  } else

  if(event.target.id === "roll-dice-2") {
    dice2.Roll();
    dice2.PlayRound();
    displayPlayersScore(dice2);
  } else

  if(event.target.id === "hold-dice-2") {
    dice2.TotalRound();
    displayPlayersScore(dice2);
  } else {
    return false;
  }

  if(dice1.DetermineWinner() !== false) {
    displayWinner(dice1);
  }

  if(dice2.DetermineWinner() !== false){
    displayWinner(dice2);
  }
}

function displayWinner(dice) {
  document.querySelector("h1").innerText = "Dice Player "+ dice.id + " is the Winner!";
  document.getElementById("rematch").classList.remove("hidden");
}
// attempt at custom names insert and winner 
//var player1 = "Player one";
//var player2 = "Player two";

//function editNames {
    //player1 = prompt("Change Player1 name");
    //player2 = prompt("Change player2 name");

   //document.querySelector("h.player1").innerHTML = Player one 
   //}

   /////HTML BUTTON 

    //<div class="container bottom">
        //<button type="button" class="butn"
           // onClick="editNames()">
            //Edit Names
        //</button>
    //</div>
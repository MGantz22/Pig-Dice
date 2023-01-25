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
    if(this.totalScore >= 10 ){
        console.log(this.totalScore);
    }

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
  let playersSpot = document.getElementById("players");
  playersSpot.addEventListener("click", PlayerInput);

});

function PlayerInput(event) {
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
  
}

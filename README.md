
function Dice() {
  this.number = 0;
  this.totalScore = 0;
  this.roundScore = 0;
}

let dice1 = new Dice();
let dice2 = new Dice();

Dice.prototype.Roll = function() {
  this.number = Math.ceil(Math.random()*6);
}

Dice.prototype.PlayRound() {
    if (this.number !== 1) {
        this.roundScore += this.number;
    } else {
        this.roundScore = 0;
    }
    return this.roundScore;
}

Dice.prototype.TotalRound() {
    this.roundScore += this.totalScore;

}

Dice.prototype.DetermineWinner() {
    if(this.TotalScore >= 100 ){
        console.log(this.totalScore + ", you won!");
    }

}
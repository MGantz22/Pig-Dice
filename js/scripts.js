function Dice(number, totalScore, roundScore) {
    this.number = 0;
    this.totalScore = 0;
    this.roundScore = 0;
}

let dice1 = new Dice(0, 0, 0);
let dice2 = new Dice(0, 0, 0);

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
}

Dice.prototype.DetermineWinner = function() {
    if(this.TotalScore >= 100 ){
        console.log(this.totalScore + ", you won!");
    }

}
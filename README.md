Describe: Dice

Test: It should create a dice object
Code: let newDice = new Dice()
Expected Output: newDice(0)

Test: It should roll a random number between 1-6
Code: Math.random()*6
Expected Output: a random number between 1-6

Test: It should add a random number to the roundScore
Code: this.roundScore += this.number
Expected Output: this.roundScore += this.number

Test: It should 0 out roundScore if this.number === 1
Code: if(this.number ===1), this.roundScore = 0
Expected Output: this.number =1, this.roundScore =0

Test: It should add roundScore to TotalRound
Code: Dice.prototype.TotalRound();
Expected Output: this.totalScore += this.roundScore

Test: It should determine a winner after 10+ points
Code: if(this.totalScore >10)
Expected Output: console.log(totalScore);
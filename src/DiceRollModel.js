
class DiceRollModel {
  constructor(diceSize=6, diceCount=1, staticIncrement=0) {
    this.diceSize = diceSize;
    this.diceCount = diceCount;
    this.staticIncrement = staticIncrement;
  }

  diceCountIncrement = () => { this.diceCount += 1; }
  diceSizeIncrement = () => { this.diceSize += 1; }
  staticIncrementIncrement = () => { this.staticIncrement += 1; }

  diceCountDecrement = () => {
    if (this.diceCount > 0) {
      this.diceCount -= 1;
    }
  }

  diceSizeDecrement = () => {
    if (this.diceSize > 0) {
      this.diceSize -= 1;
    }
  }

  staticIncrementDecrement = () => { this.staticIncrement -= 1; }

  rollDie = () => {
    return this.diceSize * Math.ceil(Math.random());
  }

  roll = () => {
    let rolls = 0;
    for (let i = 0; i < this.diceCount; i++) {
      rolls.push(this.rollDie());
    }
    return {
      rolls,
      increment: this.state.staticIncrement,
    }
  }
}

export default DiceRollModel;

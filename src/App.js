import React from 'react';
import './App.css';
import DiceRoll from './DiceRoll.js';

const defaultDieRollAttrs = [
  {
    closeable: false,
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diceRollAttrs: defaultDieRollAttrs
    }
  }

  closeDiceRollComponent = diceRollIndex => {
    return () => {
      this.state.diceRollAttrs.splice(diceRollIndex, 1);
      this.setState({ diceRollAttrs: this.state.diceRollAttrs });
    }
  }

  createDiceRollComponent = () => {
    this.setState(prevState => ({
      diceRollAttrs: [...prevState.diceRollAttrs, {
        closeable: true
      }]
    }));
  }

  rollDie = () => {
    const rollResults = [];
    for (var i = 0; i < this.state.diceRollAttrs.length; i++) {
      // call function on DiceRollModel class that will have to be passed down to
      // DiceRoll components. The DiceRoll model will have to implement the increment/decrement
      // FNs for the DiceRoll attributes, as well as the roll function.
    }
    console.log(rollResults);
  }

  clearDie = () => {
    this.setState({ diceRollAttrs: defaultDieRollAttrs });
  }

  renderDiceRolls = () => {
    console.log(this.state.diceRollAttrs.length)
    return this.state.diceRollAttrs.map((attr, index) =>
      <DiceRoll
        key={index}
        index={index}
        closeable={attr.closeable}
        closeDiceRollComponent={this.closeDiceRollComponent}>
      </DiceRoll>
    )
  }

  render = () => {
    return (
      <div className="App">
        <div className="DiceRolls">
          <div className="DiceRoll-wrapper">
            {this.renderDiceRolls()}
          </div>
          <button onClick={this.createDiceRollComponent}
            className="mainButton">New</button>
        </div>

        <div className="RollButtons">
          <button onClick={this.rollDie}
            className="mainButton">Roll</button>
          <button onClick={this.clearDie}
            className="secondaryButton">Clear</button>
        </div>
      </div>
    );
  }
}

export default App;

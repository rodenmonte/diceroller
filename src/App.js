import React from 'react';
import './App.css';
import DiceRoll from './DiceRoll.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diceRollAttrs: [
        {
          closeable: false,
        }
      ]
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
      </div>
    );
  }
}

export default App;

import React from 'react';
import './DiceRoll.css';

class DiceRoll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diceCount: 1,
            diceSize: 6,
            staticIncrement: 0,
        }
    }

    handleDiceCountChange = evt => { this.setState({ diceCount: evt.target.value })}
    handleDiceSizeChange  = evt => { this.setState({ diceSize: evt.target.value })}
    handlestaticIncrementChange  = evt => { this.setState({ staticIncrement: evt.target.value })}

    diceCountIncrement = () => { this.setState({ diceCount: this.state.diceCount + 1 })}
    diceSizeIncrement = () => { this.setState({ diceSize: this.state.diceSize + 1 })}
    staticIncrementIncrement = () => { this.setState({ staticIncrement: this.state.staticIncrement + 1 })}

    diceCountDecrement = () => {
        if (this.state.diceCount > 0) {
            this.setState({ diceCount: this.state.diceCount - 1 })
        }
    }

    diceSizeDecrement = () => {
        if (this.state.diceSize > 0) {
            this.setState({ diceSize: this.state.diceSize - 1 })
        }
    }

    // Can be negative
    staticIncrementDecrement = () => {
        this.setState({ staticIncrement: this.state.staticIncrement - 1 })
    }


    roll = () => {
        return (this.state.diceCount * this.state.diceSize) + this.state.staticIncrement;
    }

    render = () => {
        return (
            <div className="wrapper">
                <div className="diceCountPlus" onClick={this.diceCountIncrement}>+</div>
                <div className="diceSizePlus" onClick={this.diceSizeIncrement}>+</div>
                <div className="diceIncrementPlus" onClick={this.staticIncrementIncrement}>+</div>
                <div className={"close " + ((this.props.closeable) ? '' : 'displayNone')}
                    onClick={this.props.closeDiceRollComponent(this.props.index)}>
                    X
                </div>

                <div className="diceCountInput">
                    <input type="text"
                        className="countInput"
                        value={this.state.diceCount}
                        onChange={this.handleDiceCountChange} />
                </div>
                <div className="diceD">d</div>
                <div className="diceSizeInput">
                    <input type="text"
                        className="countInput"
                        value={this.state.diceSize}
                        onChange={this.handleDiceSizeChange} />
                </div>
                <div className="diceIncrementPlusSign">+</div>
                <div className="diceIncrementPlusInput">
                    <input type="text"
                        className="countInput"
                        value={this.state.staticIncrement}
                        onChange={this.handlestaticIncrementChange} />
                </div>

                <div className="diceCountMinus" onClick={this.diceCountDecrement}>-</div>
                <div className="diceSizeMinus" onClick={this.diceSizeDecrement}>-</div>
                <div className="diceIncrementMinus" onClick={this.staticIncrementDecrement}>-</div>
            </div>
        );
    }
}

export default DiceRoll;

import React from "react";
import "./Dice.css";

class Dice extends React.Component {
  state = { isClicke: false };

  // start shake dice animation
  shaketheDice = () => {
    this.setState({ isClicke: true });
    this.resetState();
    return this.props.onclick();
  };

  //reset state to stop the shake animation
  resetState() {
    setTimeout(() => {
      this.setState({ isClicke: false });
    }, 500);
  }

  //create a dice
  creatTheDice(numOfRoll) {
    return (
      <div
        className={`dice-img${numOfRoll} dice-design box-shadow ${
          this.state.isClicke ? "shake-dice" : ""
        }`}
      ></div>
    );
  }

  render() {
    return (
      <div className="dice-container">
        <button className="dice_button-design" onClick={this.shaketheDice}>
          <i className="fas fa-dice fa-2x"></i>Roll Dice
        </button>
        <div className="dices-img-container">
          {this.creatTheDice(this.props.firstDice)}

          {this.creatTheDice(this.props.secoundDice)}
        </div>
      </div>
    );
  }
}

export default Dice;

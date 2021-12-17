import React from "react";
import "./Dice.css";


class Dice extends React.Component {
  
// playDiceSound=()=>{
//   return (this.props.onclick());
// }

  render() {
    return (
      <div className="dice-container">
        <button className="dice_button-design" onClick={this.props.onclick}>
        <i className="fas fa-dice fa-2x"></i>Roll Dice
        </button>
        <div className="dices-img-container">
          <div className={`dice-img${this.props.firstDice} dice-design box-shadow`}></div>
          <div className={`dice-img${this.props.secoundDice} dice-design box-shadow`}></div>
        </div>
      </div>
    );
    
  }
}

export default Dice;

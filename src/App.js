import "./App.css";
import React from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    pointsToWin: 100,
    dice: [null, null],
    playerTurn: 1,
    currentPlayer: "player 1",
    currentScore1: 0,
    currentScore2: 0,
    totalScore1: 0,
    totalScore2: 0,
  };

  diceClick = () => {
    let firstDice = Math.floor(Math.random() * 6) + 1;
    let secoundDice = Math.floor(Math.random() * 6) + 1;
    const sumDice = firstDice + secoundDice;
    this.setState((state) => {
      return state.playerTurn === 1
        ? { currentScore1: state.currentScore1 + sumDice }
        : { currentScore2: state.currentScore2 + sumDice };
    });
  };

  handleHoldClick = () => {
    this.setState((state) => {
      return state.playerTurn === 2
        ? { playerTurn: 1,totalScore2: state.totalScore2+state.currentScore2, currentScore2: 0 }
        : { playerTurn: 2,totalScore1: state.totalScore1+state.currentScore1, currentScore1: 0 };
    });
  };

  render() {
    return (
      <>
        <Button title="New Game" />
        <div className="players-container">
          <div>
            <Player
              title="Player 1"
              totalScore = {`${this.state.totalScore1}`}
              currentScore={`${this.state.currentScore1}`}
            />
          </div>
          <div>
            <Player
              title="Player 2"
              totalScore = {`${this.state.totalScore2}`}
              currentScore={`${this.state.currentScore2}`}
            />
          </div>
        </div>
        <div className="settings-container">
          <Dice onclick={this.diceClick} />
          <Button title="Hold" onclick={this.handleHoldClick} />
          <input type="text" />
        </div>
      </>
    );
  }
}

export default App;

import "./App.css";
import React from "react";
import Player from "./components/Player/Player";
import Dice from "./components/Dice/Dice";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends React.Component {
  state = {
    pointsToWin: 100,
    dice: [0, 0],
    playerTurn: 1,
    currentPlayer: "player 1",
    currentScore1: 0,
    currentScore2: 0,
    totalScore1: 0,
    totalScore2: 0,
  };

  //select two random numbers between 1 and 6
  diceClick = () => {
    let firstDice = Math.floor(Math.random() * 6) + 1;
    let secoundDice = Math.floor(Math.random() * 6) + 1;
    const sumDice = firstDice + secoundDice;
    const isDoubleSix = firstDice === 6 && secoundDice === 6 ? true : false;
    this.updateTheDice(firstDice, secoundDice, sumDice);
    this.ResetTotalScore(isDoubleSix);
  };

  //reset totalScore and pass the turn is we got a double six
  ResetTotalScore = (boolDoubleSix) => {
    if (boolDoubleSix) {
      this.setState((state) => {
        return state.playerTurn === 1
          ? { totalScore1: 0, currentScore1: 0, playerTurn: 2 }
          : { totalScore2: 0, currentScore2: 0, playerTurn: 1 };
      });
    }
  };

  //update the dice and currentScore in state
  updateTheDice = (firstDice, secoundDice, sumDice) => {
    this.setState((state) => {
      return state.playerTurn === 1
        ? {
            currentScore1: state.currentScore1 + sumDice,
            dice: [firstDice, secoundDice],
          }
        : {
            currentScore2: state.currentScore2 + sumDice,
            dice: [firstDice, secoundDice],
          };
    });
  };

  // creating a player component
  creatPlayer(numberOfPlayer) {
    return (
      <div>
        <Player
          classOfTurn={
            this.state.playerTurn === numberOfPlayer ? "turn-border" : ""
          }
          title={`Player ${numberOfPlayer} `}
          totalScore={
            numberOfPlayer === 1
              ? `${this.state.totalScore1}`
              : `${this.state.totalScore2}`
          }
          currentScore={
            numberOfPlayer === 1
              ? `${this.state.currentScore1}`
              : `${this.state.currentScore2}`
          }
        />
      </div>
    );
  }

  //by clicking the hold button pass the turn to the other player
  handleHoldClick = () => {
    this.setState((state) => {
      return state.playerTurn === 2
        ? {
            playerTurn: 1,
            totalScore2: state.totalScore2 + state.currentScore2,
            currentScore2: 0,
          }
        : {
            playerTurn: 2,
            totalScore1: state.totalScore1 + state.currentScore1,
            currentScore1: 0,
          };
    });
  };

  //update the win point by the players input
  onHandleInput = (input) => {
    this.setState({ pointsToWin: input });
  };

  //check if one of the players wins, stop the game and send a massege about the winner
  isWin = () => {
    if (this.state.pointsToWin <= this.state.totalScore1) {
      return <div className="winner-page">{`player 1 won!!`}</div>;
    } else if (this.state.pointsToWin <= this.state.totalScore2) {
      return <div className="winner-page">{`player 2 won!!`}</div>;
    }
  };

  //reset the game state
  resetGame = () => {
    this.setState({
      pointsToWin: 100,
      dice: [0, 0],
      playerTurn: 1,
      currentPlayer: "player 1",
      currentScore1: 0,
      currentScore2: 0,
      totalScore1: 0,
      totalScore2: 0,
    });
  };

  render() {
    return (
      <div className="game-container">
        <Button title="New Game" onclick={this.resetGame} />
        <div className="players-container">
          {this.isWin()}
          {this.creatPlayer(1)}
          {this.creatPlayer(2)}
        </div>
        <div className="settings-container">
          <Dice
            onclick={this.diceClick}
            firstDice={this.state.dice[0]}
            secoundDice={this.state.dice[1]}
          />
          <Button title="Hold" onclick={this.handleHoldClick} />
          <Input saveInput={this.onHandleInput} labelName="Enter win points" />
        </div>
      </div>
    );
  }
}

export default App;

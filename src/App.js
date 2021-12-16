import "./App.css";
import React from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";
import Button from "./components/Button";

class App extends React.Component {

  state = {
    pointsToWin: 100,
    dice: [null, null],
    playerTurn: 0,
    players: [
      { totalScore: 0, currentScore: 0 },
      { totalScore: 0, currentScore: 0 },
    ],
  };


  render() {
    console.log(this.state.players[0].totalScore);
    return (
      <>
      <Button title="New Game"/>
        <div className="players-container">
          <div>
            <Player title="Player 1" totalScore={`${this.state.players[0].totalScore}`} currentScore={`${this.state.players[0].currentScore}`}/>
          </div>
          <div>
            <Player title="Player 2" totalScore={`${this.state.players[1].totalScore}`} currentScore={`${this.state.players[1].currentScore}`}/>
          </div>
        </div>
        <div className="settings-container">
          <Dice />
          <Button title="Hold"/>
          <input type="text" />
        </div>
      </>
    );
  }
}

export default App;

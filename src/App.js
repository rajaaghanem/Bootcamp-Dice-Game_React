import "./App.css";
import React from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";

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
    return (
      <>
        <div className="players-container">
          <div>
            <Player title="Player 1" />
          </div>
          <div>
            <Player title="Player 2" />
          </div>
        </div>
        <div className="settings-container">
          <Dice />
          <div>hold</div>
          <input type="text" />
        </div>
      </>
    );
  }
}

export default App;

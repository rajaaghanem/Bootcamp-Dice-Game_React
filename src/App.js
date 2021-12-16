import "./App.css";
import React from 'react';
import Player from "./components/Player";
import Dice from "./components/Dice";

class App extends React.Component {
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
        </div>
      </>
    );
  }
}

export default App;

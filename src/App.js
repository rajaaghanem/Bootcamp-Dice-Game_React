import './App.css';
import Player from "./components/Player";
import Dice from "./components/Dice";

function App() {
  return (
    <><div className='players-container'>
        <div><Player title="Player 1"/></div>
        <div><Player title="Player 2"/></div>
    </div>
    <div>settings</div>
    <div>dice</div>
    <div>hold</div>
    </>
  );
}

export default App;

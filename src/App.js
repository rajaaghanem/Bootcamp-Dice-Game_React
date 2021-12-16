import './App.css';
import Player from "./components/Player";
import Dice from "./components/Dice";

function App() {
  return (
    <><div className='players-container'>
        <div><Player title="Player 1"/></div>
        <div><Player title="Player 2"/></div>
    </div>
    <div className='settings-container'>
      <Dice/>
      <div>hold</div>
      </div>
    
    
    </>
  );
}

export default App;

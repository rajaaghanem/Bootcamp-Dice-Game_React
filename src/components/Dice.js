import React from 'react';
import './Dice.css'


class Dice extends React.Component {
    render() {
        return(
            <div className='dice-container'><button className='dice_button-design'>Roll Dice</button>
            <div>dice images</div>
            </div>
             
        );
    }
}

export default Dice;
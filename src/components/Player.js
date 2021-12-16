import React from 'react';
import './Player.css'

class Player extends React.Component {
    render() {
        return(
            <div className='palyer-box'>
                <h1>{this.props.title}</h1>
                <div className='palyer-box_total-score'>Total Score<div>15</div></div>
                <div className='palyer-box_current-score'>Current Score<div>17</div></div>
            </div>
        );
    }
}

export default Player;
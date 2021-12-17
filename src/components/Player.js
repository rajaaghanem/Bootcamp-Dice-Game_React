import React from 'react';
import './Player.css'

class Player extends React.Component {
    render() {
        return(
            <div className={`palyer-box ${this.props.classOfTurn}`}>
                <h1>{this.props.title}</h1>
                <div className='palyer-box_total-score palyer-box_score-design'>Total Score<div className='the-score'>{`${this.props.totalScore}`}</div></div>
                <div className='palyer-box_current-score palyer-box_score-design'>Current Score<div className='the-score'>{`${this.props.currentScore}`}</div></div>
            </div>
        );
    }
}

export default Player;
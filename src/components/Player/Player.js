import React, { Component } from "react";
import './Player.css';
import Title from "../Title";
import Score from "../Score";

class Player extends Component {
  render() {
    return (
        <div className={`player-container ${this.props.currentTurn}`} name={this.props.playerNum}>
            <Title TitleText={this.props.playerName} TitleTextClass={this.props.playerName}/>
            <Score scoreText={this.props.scoreTextTotal} scoreNum={this.props.scoreNumTotal}/>
            {/* <Title TitleText={this.props.winner} isWin={this.state.isWin}/> */}
            <Score scoreText={this.props.scoreTextCurrent} scoreNum={this.props.scoreNumCurrent}/>
        </div>
    );
  }
}

export default Player;
import React, { Component } from "react";
import Name from "./Name";
import Score from "./Score";

class Player extends Component {
  render() {
    return (
        <div className="player-container" name={this.props.playerNum}>
            <Name playerName={this.props.playerName}/>
            <Score scoreText={this.props.scoreTextTotal} scoreNum={this.props.scoreNumTotal}/>
            <Score scoreText={this.props.scoreTextCurrent} scoreNum={this.props.scoreNumCurrent}/>
        </div>
    );
  }
}

export default Player;
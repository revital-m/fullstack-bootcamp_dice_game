import React, { Component } from "react";
import "./Player.css";
import Title from "../Title/Title";
import Score from "../Score/Score";

class Player extends Component {
  render() {
    return (
      <div
        className={`player-container ${this.props.currentTurn}`}
        name={this.props.playerNum}
      >
        <Title
          TitleText={this.props.playerName}
          TitleTextClass={this.props.playerName}
        />
        <Score
          scoreText={this.props.scoreTextTotal}
          scoreNum={this.props.scoreNumTotal}
          scoreClass={this.props.scoreTotalClass}
        />
        <Score
          scoreText={this.props.scoreTextCurrent}
          scoreNum={this.props.scoreNumCurrent}
          scoreClass={this.props.scoreCurrentClass}
        />
      </div>
    );
  }
}

export default Player;

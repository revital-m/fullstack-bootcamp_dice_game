import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  isText = () => {
    return this.props.scoreText ? <p>{this.props.scoreText}</p> : <></>;
  };

  render() {
    return (
      <div className={`score-container ${this.props.scoreClass}`}>
        {this.isText()}
        <p>{this.props.scoreNum}</p>
      </div>
    );
  }
}

export default Score;

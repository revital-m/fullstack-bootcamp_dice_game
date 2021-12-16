import React, { Component } from "react";

class Name extends Component {
  render() {
    return <h1 className="player-name">{this.props.playerName}</h1>;
  }
}

export default Name;

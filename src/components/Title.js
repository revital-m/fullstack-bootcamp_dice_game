import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1 className={`${this.props.playerName}`}>{this.props.playerName}</h1>;
  }
}

export default Title;

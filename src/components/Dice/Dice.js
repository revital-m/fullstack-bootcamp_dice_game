import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  render() {
    return (
      <div className={`dice dice--img${this.props.numRooled}`}></div>
    );
  }
}

export default Dice;
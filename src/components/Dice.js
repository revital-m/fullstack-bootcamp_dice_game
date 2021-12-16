import React, { Component } from "react";

class Dice extends Component {
  render() {
    return (
      <div className="dice">
          <img className="dice--img" src={this.props.diceSrc} alt="Dice"></img>
      </div>
    );
  }
}

export default Dice;
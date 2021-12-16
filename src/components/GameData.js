import React, { Component } from "react";
import Button from "./Button";
import Dice from "./Dice/Dice";
import Inputs from "./Inputs";

class GameData extends Component {

  render() {
    return (
      <div className="data-container">
          <Button handleClick={this.props.handleClick} name="newGame" icon="" btnText="New Game"/>
          <Dice numRooled={this.props.numRooled0}/>
          <Dice numRooled={this.props.numRooled1}/>
          <Button handleClick={this.props.handleClick} name="rollDice" icon="" btnText="Roll Dice"/>
          <Button handleClick={this.props.handleClick} name="hold" icon="" btnText="Hold"/>
          <Inputs labelName="Points To Win" handleInputChange={this.props.handleInputChange} inputType="text" name="inputPoints" value={this.props.value}/>
      </div>
    );
  }
}

export default GameData;
import React, { Component } from "react";
import "./GameData.css";
import Button from "../Button/Button";
import Dice from "../Dice/Dice";
import Inputs from "../Inputs/Inputs";

class GameData extends Component {
  render() {
    return (
      <div className="data-container">
        <section className="data-container__dices">
          <Button
            handleClick={this.props.handleClick}
            name="rollDice"
            icon="fas fa-dice"
            btnText="Roll Dice"
          />
          <Dice numRooled={this.props.numRooled0} />
          <Dice numRooled={this.props.numRooled1} />
          <Button
            handleClick={this.props.handleClick}
            name="hold"
            icon="fas fa-hand-holding"
            btnText="Hold"
          />
        </section>
        <section className="data-container__settings">
          <Button
            handleClick={this.props.handleClick}
            name="newGame"
            icon="fas fa-plus-circle"
            btnText="New Game"
          />
          <Inputs
            labelName="Points To Win:"
            handleInputChange={this.props.handleInputChange}
            inputType="text"
            name="inputPoints"
            value={this.props.value}
          />
        </section>
      </div>
    );
  }
}

export default GameData;

import React, { Component } from "react";
import GameData from "./GameData";
import Player from "./Player";

class GameBoard extends Component {
  state = {
    pointsToWin: 100,
    dices: [1, 3],
    playersTurn: 0,
    winner: false,
    currentScore0: 0,
    currentScore1: 0,
    totalScore0: 0,
    totalScore1: 0,
  };

  handleClick = (e) => {
    switch (e.target.name) {
      case "newGame":
        this.handleNewGame();
        break;
      case "rollDice":
        this.handleRollDice();
        break;
      case "hold":
        this.handleHold();
        break;
        default:
          break;
    }
  };

  handleChange = (e) => {
    // console.log(e.target.value );
    this.setState({ pointsToWin: e.target.value });
  };

  handleNewGame = () => {
    // starting a new game, reset state.
  };

  // pick 2 random numbers beetwen 1-6, update state.dices with the numbers, update state.players-currentScore with the sum of the numbers to the current player.
  handleRollDice = () => {
    const dice1 = Math.floor(Math.random() *6) + 1;
    const dice2 = Math.floor(Math.random() *6) + 1;
    const diceSum = dice1 + dice2;
    this.setState((state) => {
      if (state.playersTurn) {
        return {currentScore1: state.currentScore1 + diceSum , dices: [dice1,dice2]};
      }
      return {currentScore0:  state.currentScore0 + diceSum , dices: [dice1,dice2]};
    });
  };

  // update state.players-totalScore with the sum of the numbers to the current player. switch current player
  handleHold = () => {
    
  };

  creatPlayers = () => {
    const playersArr = ["Player 1", "Player 2"];
    return playersArr.map((player, idx) => {
      return (
        <Player
          key={idx}
          playerNum={idx}
          playerName={player}
          scoreTextTotal=""
          scoreNumTotal={idx ? this.state.totalScore1 : this.state.totalScore0}
          scoreTextCurrent="Current"
          scoreNumCurrent={idx ? this.state.currentScore1 : this.state.currentScore0}
        />
      );
    });
  };

  render() {
    return (
      <div className="game-container">
        {this.creatPlayers()}
        <GameData
          value={this.state.pointsToWin}
          numRooled0={this.state.dices[0]}
          numRooled1={this.state.dices[1]}
          handleClick={this.handleClick}
          handleInputChange={this.handleChange}
        />
      </div>
    );
  }
}

export default GameBoard;

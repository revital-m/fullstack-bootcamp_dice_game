import React, { Component } from "react";
import "./GameBoard.css";
import GameData from "../GameData/GameData";
import Player from "../Player/Player";
// import Title from "../Title/Title";
import Message from "../Message/Message";

class GameBoard extends Component {
  state = {
    pointsToWin: 100,
    dices: [7, 7],
    playersTurn: 0,
    winner: "",
    iswin: false,
    isDouble: false,
    isDoubleSix: false,
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
    this.setState({ pointsToWin: e.target.value });
  };

  // starting a new game, reset state.
  handleNewGame = () => {
    this.setState({
      pointsToWin: 100,
      dices: [7, 7],
      playersTurn: 0,
      winner: "",
      iswin: false,
      isDouble: false,
      isDoubleSix: false,
      currentScore0: 0,
      currentScore1: 0,
      totalScore0: 0,
      totalScore1: 0,
    });
  };

  // pick 2 random numbers beetwen 1-6, update state.dices with the numbers.
  handleRollDice = () => {
    console.log(this.state.isDouble,this.state.isDoubleSix);
    if (!(this.state.isDouble || this.state.isDoubleSix)) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const diceSum = dice1 + dice2;

      this.setState({ dices: [dice1, dice2] });
      setTimeout(() => {
        this.resRollDice(dice1, dice2, diceSum);
      }, 500);
    }
  };

  // update state.players-currentScore with the sum of the numbers to the current player.
  resRollDice = (dice1, dice2, diceSum) => {
    if (dice1 === 6 && dice2 === 6) {
      this.handleDoubleSix();
      return;
    }
    this.setState((state) => {
      if (state.playersTurn) {
        return {
          currentScore1: state.currentScore1 + diceSum,
        };
      }
      return {
        currentScore0: state.currentScore0 + diceSum,
      };
    });
    if (dice1 !== dice2) {
      this.handleHold();
    } else {
      this.handleDouble();
    }
  };

  // do text massege on screen for rolling double.
  handleDouble = () => {
    this.setState({ isDouble: true });
    setTimeout(() => {
      this.setState({ isDouble: false });
    }, 1800);
  };

  // reset the current player score and switch current player.
  handleDoubleSix = () => {
    if (!(this.state.isDouble || this.state.isDoubleSix)) {
      this.setState((state) => {
        if (state.playersTurn) {
          return {
            currentScore1: 0,
            totalScore1: 0,
            playersTurn: 0,
            isDoubleSix: true,
          };
        }
        return {
          currentScore0: 0,
          totalScore0: 0,
          playersTurn: 1,
          isDoubleSix: true,
        };
      });
      setTimeout(() => {
        this.setState({ isDoubleSix: false });
      }, 1800);
    }
  };

  // update state.players-totalScore with the sum of the numbers to the current player. switch current player
  handleHold = () => {
    this.setState((state) => {
      if (state.playersTurn) {
        const isWinner =
          state.totalScore1 + state.currentScore1 >= state.pointsToWin
            ? "Player 2"
            : "";
        return {
          totalScore1: state.totalScore1 + state.currentScore1,
          currentScore1: 0,
          playersTurn: 0,
          winner: isWinner,
          iswin: isWinner ? true : false,
        };
      }
      const isWinner =
        state.totalScore0 + state.currentScore0 >= state.pointsToWin
          ? "Player 1"
          : "";
      return {
        totalScore0: state.totalScore0 + state.currentScore0,
        currentScore0: 0,
        playersTurn: 1,
        winner: isWinner,
        iswin: isWinner ? true : false,
      };
    });
  };

  // create the Player components.
  creatPlayers = () => {
    const playersArr = ["Player-1", "Player-2"];
    return playersArr.map((player, idx) => {
      return (
        <Player
          key={idx}
          currentTurn={idx === this.state.playersTurn ? "current-turn" : ""}
          playerNum={idx}
          playerName={player}
          scoreTextTotal="Total:"
          scoreNumTotal={idx ? this.state.totalScore1 : this.state.totalScore0}
          scoreTotalClass="score-container--total"
          scoreTextCurrent="Current:"
          scoreNumCurrent={
            idx ? this.state.currentScore1 : this.state.currentScore0
          }
          scoreCurrentClass="score-container--current"
          iswin={this.state.iswin ? "Winner!" : ""}
          winner={this.state.winner}
        />
      );
    });
  };

  render() {
    return (
      <div className="game-container">
        <main className="game-container__players">
          {this.creatPlayers()}
          <Message
            msgClass={this.state.isDouble ? `double` : ``}
            msgTitle={
              this.state.isDouble
                ? `Congratulations you just rolled double!`
                : ``
            }
            msgTitleIcon={this.state.isDouble ? `fas fa-dice` : ``}
            msgInfo={this.state.isDouble ? `you get another turn!` : ``}
            msgInfoIcon={this.state.isDouble ? `far fa-grin-stars` : ``}
          />
          <Message
            msgClass={this.state.isDoubleSix ? `double` : ``}
            msgTitle={
              this.state.isDoubleSix ? `Oh no! you just rolled double 6...` : ``
            }
            msgTitleIcon={
              this.state.isDoubleSix ? `fas fa-skull-crossbones` : ``
            }
            msgInfo=""
            msgInfoIcon=""
          />
          <Message
            msgClass={this.state.iswin ? `winner` : ``}
            msgTitle={
              this.state.iswin ? `${this.state.winner} is the winner!` : ``
            }
            msgTitleIcon={this.state.iswin ? `fas fa-trophy` : ``}
            msgInfo=""
            msgInfoIcon=""
          />
          {/* <Title
            TitleText={
              this.state.isDouble
                ? `Congratulations you just rolled double, you get another turn!`
                : `Congratulations you just rolled double, you get another turn!`
            }
            TitleTextClass={this.state.isDouble ? `double` : `double`}
            // TitleText={
            //   this.state.isDouble ? `Congratulations you just rolled double, you get another turn!` : ``
            // }
            // TitleTextClass={this.state.isDouble ? `double` : ``}
          />
          <Title
            TitleText={
              this.state.iswin ? `${this.state.winner} is the winner!` : ``
            }
            TitleTextClass={this.state.iswin ? `winner` : ``}
          /> */}
        </main>
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

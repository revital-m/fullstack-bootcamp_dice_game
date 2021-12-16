import React, { Component } from "react";
import Player from "./Player";

class GameBoard extends Component {
    state = {pointsToWin: 100, dices: [null, null], playersTurn: 0, winner: false, players: [{currentScore: 0 , totalScore: 0,},{currentScore: 1 , totalScore: 1,}]};

    creatPlayers = () => {
        const playersArr = ['Player 1', 'Player 2'];
        return playersArr.map((player,idx) => {
            return <Player key={idx} playerNum={idx} playerName={player} scoreTextTotal="" scoreNumTotal={this.state.players[idx].totalScore} scoreTextCurrent="Current" scoreNumCurrent={this.state.players[idx].currentScore} />
        });
    }

  render() {
    return (
        <div className="game-container">
            {this.creatPlayers()}
        </div>
    );
  }
}

export default GameBoard;
import React, { Component } from "react";
import GameBoard from "./components/GameBoard/GameBoard";

class App extends Component {
  render() {
    return (
      <div className="container">
        <GameBoard />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";



class App extends Component {
  state = {  };

  render() {
    return (
    <div className="container">
      <GameBoard />
    </div>
    
    );
  }
}

export default App;
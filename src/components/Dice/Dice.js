import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {

  // diceAnimation = () => {
  //   const degArr = [[0,0,0],[-310,-362,-38],[-133,-360,-53],[-400,-320,-2],[135,-217,-88],[-47,-219,-81],[-224,-317,5]];


  // }
  

  render() {
    return (
    <div className="dice-container">
      <div className={`dice dice-animation-${this.props.numRooled}`}>
        <div className="dice--front"><i className="dice--num fas fa-dice-one"></i></div>
        <div className="dice--back"><i className="dice--num fas fa-dice-two"></i></div>
        <div className="dice--top"><i className="dice--num fas fa-dice-three"></i></div>
        <div className="dice--left"><i className="dice--num fas fa-dice-four"></i></div>
        <div className="dice--right"><i className="dice--num fas fa-dice-five"></i></div>
        <div className="dice--bottom"><i className="dice--num fas fa-dice-six"></i></div>
      </div>
    </div>
    );
  }
}

// class Dice extends Component {
//   render() {
//     return <div className={`dice dice--img${this.props.numRooled}`}></div>;
//   }
// }

export default Dice;

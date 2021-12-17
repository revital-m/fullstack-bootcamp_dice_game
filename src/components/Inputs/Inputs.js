import React, { Component } from "react";
import "./Inputs.css";

class Inputs extends Component {
  render() {
    return (
      <div className="Input">
        <label className="input--label">{this.props.labelName}</label>
        <input
          className="input--info"
          onChange={this.props.handleInputChange}
          type={this.props.inputType}
          name={this.props.name}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default Inputs;

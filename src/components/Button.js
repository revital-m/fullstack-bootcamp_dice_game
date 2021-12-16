import React, { Component } from "react";

class Button extends Component {

  render() {
    return (
      <div className="textarea">
          <button onClick={this.props.handleClick} name={this.props.name}>{this.props.btnText}</button>
      </div>
    );
  }
}

export default Button;
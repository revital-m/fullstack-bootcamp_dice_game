import React, { Component } from "react";

class Button extends Component {

  render() {
    return (
      <div className="btn-container">
          <button className="btn--icon btn--text" onClick={this.props.handleClick} name={this.props.name}>{`${this.props.icon} ${this.props.btnText}`}</button>
      </div>
    );
  }
}

export default Button;
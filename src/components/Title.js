import React, { Component } from "react";

class Title extends Component {
  isText = () => {
    return this.props.TitleText ? (
      <h1 className={`${this.props.TitleTextClass}`}>{this.props.TitleText}</h1>
    ) : (
      <></>
    );
  };

  render() {
    return <>{this.isText()}</>;
  }
}

export default Title;

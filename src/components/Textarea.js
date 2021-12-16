import React, { Component } from "react";

class Textarea extends Component {
  render() {
    return (
      <div className="textarea">
        <label className="textarea-label">{this.props.labelName}</label>
        <textarea className="textarea-info"
          onChange={this.props.handleInputChange}
          name={this.props.name}
          cols={this.props.cols}
          rows={this.props.rows}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}

export default Textarea;

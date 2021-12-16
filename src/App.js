import React, { Component } from "react";
import "./App.css";
import Input from "./components/Inputs";
import Select from "./components/Select";
import Textarea from "./components/Textarea";

class App extends Component {
  state = { firstName: "", lastName: "", freeText: "", selectValue: "", isContinueBtn: false };

  handleInputChange = (e) => {
    this.setState({[e.target.name] : [e.target.value]});
  };

  handleClick = (e) => {
    this.setState({[e.target.name] : true});
  }

  render() {
    return (
    <div className="container">
      <Input handleInputChange={this.handleInputChange} inputType="text" name="firstName" labelName="First Name:" value={this.state.firstName}/>
      <Input handleInputChange={this.handleInputChange} inputType="text" name="lastName" labelName="Last Name:"  value={this.state.lastName}/>
      <Select value={this.state.selectValue} handleInputChange={this.handleInputChange} name="selectValue" labelName="Age:"/>
      <Textarea handleInputChange={this.handleInputChange} name="freeText" cols="30" rows="6" labelName="Free Text:" value={this.state.freeText}/>
    </div>
    
    );
  }
}

export default App;

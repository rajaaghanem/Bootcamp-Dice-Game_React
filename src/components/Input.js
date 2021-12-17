import React from "react";
import "./Input.css";

class Input extends React.Component {
  state = { text: " " };

  //update the state text by the user input
  handleInput = (event) => {
    this.setState({ text: event.target.value });
  };

  //save the user input when the user press enter
  handleKey = (event) => {
    if (event.key === "Enter") return this.props.saveInput(this.state.text);
  };

  render() {
    return (
      <>
        <label className="label-design">{this.props.labelName}</label>
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.text}
          onKeyPress={this.handleKey}
          className="input-design"
        />
      </>
    );
  }
}

export default Input;

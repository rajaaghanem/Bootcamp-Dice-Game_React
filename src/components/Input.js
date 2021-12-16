import React from "react";

class Input extends React.Component {
  state = { text: " " };

  handleInput = (event) => {
    this.setState({ text: event.target.value });
  };

  handleKey=(event)=>{
    if(event.key === "Enter")
    return (this.props.saveInput(this.state.text));
  }

  render() {
    return <><label>{this.props.labelName}</label><input type="text" placeholder='INPUT WITH ICON' onChange={this.handleInput} value={this.state.text}
        onKeyPress={this.handleKey} /></>;
  }
}

export default Input;

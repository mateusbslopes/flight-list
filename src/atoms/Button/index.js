import React from "react";
import style from "./style";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <button css={() => style(this.state.borderColor)}>
        {this.state.children}
      </button>
    );
  }
}

export default Button;

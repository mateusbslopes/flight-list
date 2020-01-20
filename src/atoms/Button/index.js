import React from "react";
import style from "./style";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      onClick: props.onClick,
      borderBottomColor: props.borderBottomColor
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <div
        onClick={this.state.onClick}
        css={() =>
          style(
            this.state.borderColor,
            this.state.backgroundColor,
            this.state.borderBottomColor
          )
        }
      >
        {this.state.children}
      </div>
    );
  }
}

export default Button;

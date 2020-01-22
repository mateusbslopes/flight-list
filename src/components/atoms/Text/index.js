import React from "react";
import style from "./style";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      size: props.size,
      color: props.color,
      weight: props.weight
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <div
        css={() => style(this.state.size, this.state.weight, this.state.color)}
      >
        {this.state.children}
      </div>
    );
  }
}

export default Text;

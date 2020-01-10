import React from "react";
import style from "./style";

const iconPrefix = "icon-max-";

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name, color: props.color, size: props.size };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <i
        className={iconPrefix + this.state.name}
        css={() => style(this.state.color, this.state.size)}
      />
    );
  }
}

export default Icon;

import React from "react";
import style from "./style";

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = { children: props.children };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return <div css={style}>{this.state.children}</div>;
  }
}

export default Text;

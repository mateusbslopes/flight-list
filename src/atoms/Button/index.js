import React from "react";
import style from "./style";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return <button css={style}>{this.state.children}</button>;
  }
}

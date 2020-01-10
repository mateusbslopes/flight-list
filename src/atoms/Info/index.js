import React from "react";
import Text from "../Text/index";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { children: props.children };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return <Text size={12}>{this.state.children}</Text>;
  }
}

export default Info;

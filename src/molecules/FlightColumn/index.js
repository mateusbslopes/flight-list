import React from "react";
import style from "./style";
import Text from "../../atoms/Text/index";
import Info from "../../atoms/Info/index";

class FlightColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      info: props.info
    };
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <Text>{this.state.text}</Text>
        <Info>{this.state.info}</Info>
      </div>
    );
  }
}

export default FlightColumn;

import React from "react";
import style from "./style";
import Text from "../../atoms/Text/index";

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
      <div css={style}>
        <Text>{this.state.text}</Text>
        <Text weight="light">{this.state.info}</Text>
      </div>
    );
  }
}

export default FlightColumn;

import React from "react";
import FlightColumn from "../../molecules/FlightColumn/index";
import Icon from "../../atoms/Icon/index";
import style from "./style";
import FlightDetailButton from "../../molecules/FlightDetailButton";

class FlightRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <div css={style}>
        <FlightColumn text="GOL" info="G3-1307" />
        <FlightColumn text="11:25" info="CFN (Confins)" />
        <FlightColumn text="3H10" info="1 parada" />
        <FlightColumn text="14:35" info="FLN" />
        <FlightDetailButton />
      </div>
    );
  }
}

export default FlightRow;

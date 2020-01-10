import React from "react";
import FlightColumn from "../../molecules/FlightColumn";
import style from "./style";
import FlightDetailButton from "../../molecules/FlightDetailButton";

import FlightController from "../../controllers/Flights";

class FlightRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    FlightController.getAirports().then(console.log);
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

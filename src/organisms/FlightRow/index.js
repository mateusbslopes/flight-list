import React from "react";
import FlightColumn from "../../molecules/FlightColumn";
import style from "./style";
import FlightDetailButton from "../../molecules/FlightDetailButton";

import FlightController from "../../controllers/Flights";
import FlightPrice from "../../molecules/FlightPrice";

class FlightRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    // FlightController.getAirports().then();
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <div css={style} key={this.state.id}>
        <FlightColumn
          text={this.state.airline}
          info={this.state.flightNumber}
        />
        <FlightColumn text={this.state.departureDate} info={this.state.from} />
        <FlightColumn
          text={`${this.state.duration} minutos`}
          info={`${this.state.trips.length} parada(s)`}
        />
        <FlightColumn text={this.state.arrivalDate} info={this.state.to} />
        <FlightDetailButton />
        <FlightPrice />
      </div>
    );
  }
}

export default FlightRow;

import React from "react";
import FlightList from "../FlightList";

class Body extends React.Component {
  render() {
    return <FlightList flights={this.props.flights} />;
  }
}

export default Body;

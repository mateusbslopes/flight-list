import React from "react";
import FlightList from "../FlightList";
import Text from "../../atoms/Text";

class Body extends React.Component {
  render() {
    return <FlightList flights={this.props.flights} />;
  }
}

export default Body;

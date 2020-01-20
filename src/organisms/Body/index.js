import React from "react";
import FlightList from "../FlightList";
import Text from "../../atoms/Text";

class Body extends React.Component {
  render() {
    return (
      <div>
        {this.props.flights ? (
          <FlightList flights={this.props.flights} />
        ) : (
          "Nada a mostrar"
        )}
      </div>
    );
  }
}

export default Body;

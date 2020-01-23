import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../../molecules/Card";
import { connect } from "react-redux";

class FlightList extends React.Component {
  render() {
    return (
      <div css={style}>
        <Card
          header={
            <div className="flight-list-header">
              <Text color="white">Companhia</Text>
              <Text color="white">Partida</Text>
              <Text color="white">Duracao</Text>
              <Text color="white">Chegada</Text>
            </div>
          }
        />

        {this.props.flights.map(flight => (
          <FlightRow key={flight.id} {...flight} />
        ))}
      </div>
    );
  }
}
function getFlights(flights, flightsToDisplay, airlines) {
  return flights[flightsToDisplay].filter(
    flight =>
      !!airlines.some(
        airline => airline.label === flight.airline && airline.checked
      )
  );
}

const mapStateToProps = state => ({
  flights: getFlights(state.flights, state.flights.displayed, state.airlines)
});

export default connect(mapStateToProps)(FlightList);

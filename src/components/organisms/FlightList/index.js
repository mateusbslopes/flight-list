import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../../molecules/Card";
import { connect } from "react-redux";

function FlightList({ flights }) {
  if (!flights.length)
    return (
      <Text>
        Opa, nao encontramos voos com esse filtro! Tente deixa-lo mais generico.
      </Text>
    );

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

      {flights.map(flight => (
        <FlightRow key={flight.id} {...flight} />
      ))}
    </div>
  );
}

function getFlights(flights, flightsToDisplay, airlines) {
  let flightsToReturn = [];
  flightsToReturn = flights[flightsToDisplay].filter(
    flight =>
      !!airlines.some(
        airline => airline.label === flight.airline && airline.checked
      )
  );
  flightsToReturn = flightsToReturn.sort((flightA, flightB) => {
    return flightA.pricing[flightA.pricing.bestPriceAt].saleTotal <
      flightB.pricing[flightB.pricing.bestPriceAt].saleTotal
      ? -1
      : 1;
  });
  return flightsToReturn;
}

const mapStateToProps = state => ({
  flights: getFlights(state.flights, state.flights.displayed, state.airlines)
});

export default connect(mapStateToProps)(FlightList);

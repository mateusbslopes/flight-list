import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../../molecules/Card";
import { connect } from "react-redux";

function FlightList({ flights }) {
  if (!flights.length) return <Text>noFilterhResultMessage</Text>;

  return (
    <div css={style}>
      <Card
        header={
          <div className="flight-list-header">
            <Text color="ternary">airline</Text>
            <Text color="ternary">outboundHour</Text>
            <Text color="ternary">duration</Text>
            <Text color="ternary">inboundHour</Text>
          </div>
        }
      />

      {flights.map(flight => (
        <FlightRow key={flight.id} {...flight} />
      ))}
    </div>
  );
}

// TODO Refactor filter
function filterByTime(flight, time) {
  let hourToCompare = new Date(flight.departureDate);

  switch (time) {
    case "morning":
      return hourToCompare.getHours() >= 6 && hourToCompare.getHours() <= 11;
    case "afternoon":
      return hourToCompare.getHours() >= 12 && hourToCompare.getHours() <= 17;
    case "night":
      return hourToCompare.getHours() >= 18 && hourToCompare.getHours() <= 23;
    case "dawn":
      return hourToCompare.getHours() >= 0 && hourToCompare.getHours() <= 5;
  }
}

function getFlights(flights, flightsToDisplay, airlines, filter) {
  let flightsToReturn = [];
  flightsToReturn = flights[flightsToDisplay].filter(
    flight =>
      !!airlines.some(
        airline => airline.label === flight.airlineTarget && airline.checked
      ) &&
      ((filter.outboundHour.morning.checked &&
        filterByTime(flight, "morning")) ||
        (filter.outboundHour.afternoon.checked &&
          filterByTime(flight, "afternoon")) ||
        (filter.outboundHour.night.checked && filterByTime(flight, "night")) ||
        (filter.outboundHour.dawn.checked && filterByTime(flight, "dawn")))
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
  flights: getFlights(
    state.flights,
    state.flights.displayed,
    state.airlines,
    state.filter
  )
});

export default connect(mapStateToProps)(FlightList);

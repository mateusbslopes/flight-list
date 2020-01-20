import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../../molecules/Card";

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

export default FlightList;

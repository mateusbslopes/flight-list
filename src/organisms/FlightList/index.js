import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";

class FlightList extends React.Component {
  render() {
    return (
      <div>
        <div css={style}>
          <Text>Companhia</Text>
          <Text>Partida</Text>
          <Text>Duracao</Text>
          <Text>Chegada</Text>
          <Text>Detalhes</Text>
          <Text>Preco</Text>
        </div>

        {this.props.flights.map(flight => (
          <FlightRow key={flight.id} {...flight} />
        ))}
      </div>
    );
  }
}

export default FlightList;

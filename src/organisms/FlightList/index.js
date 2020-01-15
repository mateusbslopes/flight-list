import React from "react";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../../molecules/Card";

class FlightList extends React.Component {
  render() {
    return (
      <div>
        <Card
          header={
            <div css={style}>
              <Text color="white">Companhia</Text>
              <Text color="white">Partida</Text>
              <Text color="white">Duracao</Text>
              <Text color="white">Chegada</Text>
              <Text color="white">Detalhes</Text>
              <Text color="white">Preco</Text>
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

import React from "react";
import FlightService from "../../services/Flights";
import FlightRow from "../FlightRow";
import Text from "../../atoms/Text";
import style from "./style";

class FlightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null };
    FlightService.getFlights().then(flights => {
      this.setState({ flights: flights.data.outbound });
    });
  }
  componentDidMount() {
    this.setState(this.state);
  }

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
        {this.state.flights ? (
          this.state.flights.map(flight => <FlightRow {...flight} />)
        ) : (
          <img src="https://cdn.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif" />
        )}
      </div>
    );
  }
}

export default FlightList;

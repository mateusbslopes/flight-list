import React from "react";
import FlightService from "../../services/Flights";

class FlightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null };
    FlightService.getFlights().then(console.log);
  }
  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return this.state.flights ? (
      this.state.flights.map(flight => <div>Teste</div>)
    ) : (
      <img src="https://cdn.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif" />
    );
  }
}

export default FlightList;

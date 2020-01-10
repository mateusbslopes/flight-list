import React from "react";
import FlightService from "../../services/Flights";
import FlightRow from "../FlightRow";

class FlightList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null };
    FlightService.getFlights().then(flights => {
      console.log(flights);
      this.setState({ flights: flights.data.outbound });
    });
  }
  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return this.state.flights ? (
      this.state.flights.map(flight => <FlightRow {...flight} />)
    ) : (
      <img src="https://cdn.dribbble.com/users/5661/screenshots/2491233/loading-gif-800x600.gif" />
    );
  }
}

export default FlightList;

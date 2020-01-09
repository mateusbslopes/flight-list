import React from "react";
import ReactDOM from "react-dom";
import FlightsService from "./Service/Flights";
import FlightColumn from "./components/FlightColumn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.flightsService = new FlightsService();
    this.state = { flights: null };
  }

  componentDidMount() {
    this.flightsService
      .getFlights()
      .then(flights => this.setState({ flights: flights }));
  }

  render() {
    return <div>{this.state.flights && <FlightColumn />}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

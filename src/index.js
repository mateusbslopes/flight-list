import React from "react";
import ReactDOM from "react-dom";
import FlightList from "./organisms/FlightList/index";
import Header from "./organisms/Header";
import FlightService from "./services/Flights";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(filter) {
    FlightService.getFlights(filter).then(flights => {
      this.setState({ flights: flights.data.outbound });
    });
  }

  render() {
    return (
      <div>
        <Header onSearch={this.onSearch} />
        <FlightList flights={this.state.flights} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

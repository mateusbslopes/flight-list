import React from "react";
import ReactDOM from "react-dom";
import Header from "./organisms/Header";
import FlightController from "./controllers/Flights";
import Body from "./organisms/Body";
import ExtraInfo from "./organisms/ExtraInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null, displayedFlights: "outbound", airline: null };

    this.onSearch = this.onSearch.bind(this);
    this.onChangeDisplayedFlights = this.onChangeDisplayedFlights.bind(this);
    this.onChangeAirline = this.onChangeAirline.bind(this);
    this.addFlights = this.addFlights.bind(this);
  }

  addFlights(newFlights) {
    // TODO Null object pattern
    let flights = this.state.flights || { outbound: [], inbound: [] };
    flights.outbound = flights.outbound.concat(newFlights.outbound);
    flights.inbound = flights.inbound.concat(newFlights.inbound);
    this.setState({ flights });
  }

  onSearch(filter) {
    filter.airline = this.state.airline;
    FlightController.getFlights(filter, this.addFlights);
  }

  onChangeAirline(newAirline) {
    this.setState({ airline: newAirline });
  }

  onChangeDisplayedFlights(flightsToDisplay) {
    if (!this.state.flights) return;
    if (!this.state.flights[flightsToDisplay])
      throw new Error(
        `there is no display flights w/ name ${flightsToDisplay}`
      );

    this.setState({ displayedFlights: flightsToDisplay });
  }

  getFlights(flights, flightsToDisplay) {
    return flights ? flights[flightsToDisplay] : [];
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          onChangeDisplayedFlights={this.onChangeDisplayedFlights}
        />
        <div>
          <ExtraInfo
            onChange={this.onChangeAirline}
            filterableAirlines={this.state.filterableAirlines}
          />
          <Body
            flights={this.getFlights(
              this.state.flights,
              this.state.displayedFlights
            )}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

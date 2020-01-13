import React from "react";
import ReactDOM from "react-dom";
import Header from "./organisms/Header";
import FlightController from "./controllers/Flights";
import Body from "./organisms/Body";
import ExtraInfo from "./organisms/ExtraInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: null,
      displayedFlights: "outbound",
      filterableAirlines: null
    };

    this.onSearch = this.onSearch.bind(this);
    this.onChangeDisplayedFlights = this.onChangeDisplayedFlights.bind(this);
    this.onChangeFilterableAirlines = this.onChangeFilterableAirlines.bind(
      this
    );
    this.addFlights = this.addFlights.bind(this);
  }

  addFlights(newFlights, airlineLabel) {
    // TODO Null object pattern
    let flights = this.state.flights || { outbound: [], inbound: [] };
    flights.outbound = flights.outbound.concat(newFlights.outbound);
    flights.inbound = flights.inbound.concat(newFlights.inbound);

    let filterableAirline = {
      label: airlineLabel,
      inbound: newFlights.inbound.length,
      outbound: newFlights.outbound.length,
      checked: true
    };

    let filterableAirlines = this.state.filterableAirlines || [];
    filterableAirlines.push(filterableAirline);

    this.setState({ flights, filterableAirlines });
  }

  onSearch(filter) {
    FlightController.getFlights(filter, this.addFlights);
  }

  onChangeFilterableAirlines(filterableAirlines) {
    this.setState({ filterableAirlines });
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
    if (!flights) return [];
    return flights[flightsToDisplay].filter(
      flight =>
        !!this.state.filterableAirlines.some(
          airline => airline.label === flight.airline && airline.checked
        )
    );
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
            airlines={this.state.filterableAirlines || []}
            setAirlines={this.onChangeFilterableAirlines}
            displayedFlights={this.state.displayedFlights}
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

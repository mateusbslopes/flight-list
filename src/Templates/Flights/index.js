import React from "react";
import Header from "../../organisms/Header";
import FlightController from "../../controllers/Flights";
import Body from "../../organisms/Body";
import ExtraInfo from "../../organisms/ExtraInfo";
import style from "./style";

class Flights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: null,
      displayedFlights: "outbound",
      filterableAirlines: null,
      airports: null,
      errors: {}
    };

    FlightController.getAirports().then(response =>
      this.setState({ airports: Object.values(response.data.airports) })
    );

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
    try {
      FlightController.getFlights(filter, this.addFlights);
    } catch (error) {
      this.setState({ errors: { filter: error.inner } });
    }
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
      <div css={style} className="container-fluid">
        <Header
          className="row"
          onSearch={this.onSearch}
          onChangeDisplayedFlights={this.onChangeDisplayedFlights}
          airports={this.state.airports || []}
          filterErrors={this.state.errors.filter}
        />
        {/* <div className="content">
          <div className="extraInfo">
            <ExtraInfo
              airlines={this.state.filterableAirlines || []}
              setAirlines={this.onChangeFilterableAirlines}
              displayedFlights={this.state.displayedFlights}
            />
          </div>
          <div className="body">
            <Body
              className="body"
              flights={this.getFlights(
                this.state.flights,
                this.state.displayedFlights
              )}
            />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Flights;

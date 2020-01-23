import React from "react";
import Header from "../../organisms/Header";
import FlightController from "../../../controllers/Flights";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import style from "./style";

class Flights extends React.Component {
  // addFlights(newFlights, airlineLabel) {
  //   // TODO Null object pattern
  //   let flights = this.props.flights || { outbound: [], inbound: [] };
  //   flights.outbound = flights.outbound.concat(newFlights.outbound);
  //   flights.inbound = flights.inbound.concat(newFlights.inbound);

  //   let filterableAirline = {
  //     label: airlineLabel,
  //     inbound: newFlights.inbound.length,
  //     outbound: newFlights.outbound.length,
  //     checked: true
  //   };

  //   let filterableAirlines = this.props.filterableAirlines || [];
  //   filterableAirlines.push(filterableAirline);

  //   this.setState({ flights, filterableAirlines });
  // }

  // onSearch(filter) {
  //   try {
  //     FlightController.getFlights(filter, this.addFlights);
  //   } catch (error) {
  //     this.setState({ errors: { filter: error.inner } });
  //   }
  // }

  // onChangeFilterableAirlines(filterableAirlines) {
  //   this.setState({ filterableAirlines });
  // }

  // onChangeDisplayedFlights(flightsToDisplay) {
  //   if (!this.props.flights) return;
  //   if (!this.props.flights[flightsToDisplay])
  //     throw new Error(
  //       `there is no display flights w/ name ${flightsToDisplay}`
  //     );

  //   this.setState({ displayedFlights: flightsToDisplay });
  // }

  // getFlights(flights, flightsToDisplay) {
  //   if (!flights) return [];
  //   return flights[flightsToDisplay].filter(
  //     flight =>
  //       !!this.props.filterableAirlines.some(
  //         airline => airline.label === flight.airline && airline.checked
  //       )
  //   );
  // }

  componentDidMount() {
    // Add destruct
    const { getAirports } = this.props;
    getAirports();
  }

  render() {
    return (
      <div css={style} className="container-flex">
        <Header
          filter={this.props.filter}
          onSearch={this.onSearch}
          onChangeDisplayedFlights={this.onChangeDisplayedFlights}
          displayedFlights={this.props.displayedFlights}
          airports={this.props.airports}
          filterErrors={this.props.errors.filter}
        />
        {/* <div className="extraInfo">
            <ExtraInfo
              airlines={this.props.filterableAirlines || []}
              setAirlines={this.onChangeFilterableAirlines}
              displayedFlights={this.props.displayedFlights}
            />
          </div> */}
        <Body flights={this.props.flights} />
      </div>
    );
  }
}

// Filtrar via chebox aqui
const mapStateToProps = state => ({
  flights: state.flights[state.flightsToDisplay].filter(
    flight =>
      !!state.filterableAirlines.filterableAirlines.some(
        airline => airline.label === flight.airline && airline.checked
      )
  ),
  displayedFlights: state.displayedFlights,
  filterableAirlines: state.filterableAirlines,
  airports: state.airports,
  errors: state.errors,
  filter: state.filter
});

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

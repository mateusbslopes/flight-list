import React from "react";
import Header from "../../organisms/Header";
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
    const { getAirports } = this.props;
    getAirports();
  }

  render() {
    return (
      <div css={style} className="container-flex">
        <Header />
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

const getFlights = (flights, displayedFlights, filterableAirlines) => {
  flights[displayedFlights].filter(
    flight =>
      !!filterableAirlines.filterableAirlines.some(
        airline => airline.label === flight.airline && airline.checked
      )
  );
};

// Filtrar via chebox aqui
const mapStateToProps = state => ({
  flights: getFlights(
    state.flights,
    state.displayedFlights,
    state.filterableAirlines
  ),
  filterableAirlines: state.filterableAirlines,
  airports: state.airports,
  filter: state.filter
});

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

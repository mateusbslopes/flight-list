import React from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import style from "./style";
import Footer from "../../organisms/Footer";

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
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(null, mapDispatchToProps)(Flights);

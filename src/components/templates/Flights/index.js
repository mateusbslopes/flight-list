import React from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import style from "./style";
import Footer from "../../organisms/Footer";

class Flights extends React.Component {
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

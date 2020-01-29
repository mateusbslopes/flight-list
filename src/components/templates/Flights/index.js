import React from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import Footer from "../../organisms/Footer";
import LateralFilter from "../../organisms/LateralFilter";

class Flights extends React.Component {
  componentDidMount() {
    const { getAirports } = this.props;
    getAirports();
  }

  render() {
    return (
      <div className="container-flex">
        <Header />
        <LateralFilter />
        <Body />
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(null, mapDispatchToProps)(Flights);

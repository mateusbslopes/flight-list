import React, { useEffect } from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import Footer from "../../organisms/Footer";
import Filter from "../../organisms/Filter";

function Flights({ getAirports }) {
  getAirports();

  return (
    <div className="container-flex">
      <Header />
      <Filter />
      <Body />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(null, mapDispatchToProps)(Flights);

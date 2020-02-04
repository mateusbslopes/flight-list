import React from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import Footer from "../../organisms/Footer";
import Filter from "../../organisms/Filter";
import { IntlProvider } from "react-intl";
import loadTranslations from "../../../translations";

function Flights({ getAirports, language }) {
  getAirports();

  return (
    <IntlProvider messages={loadTranslations(language)}>
      <div className="container-flex">
        <Header />
        <Filter />
        <Body />
        <Footer />
      </div>
    </IntlProvider>
  );
}

const mapStateToProps = state => ({
  language: state.localization.language
});

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

import React from "react";
import Header from "../../organisms/Header";
import Body from "../../organisms/Body";
import { getAirports as getAirportsAction } from "../../../actions/index";
import { connect } from "react-redux";
import Footer from "../../organisms/Footer";
import Filter from "../../organisms/Filter";
import { IntlProvider } from "react-intl";
import loadTranslations from "../../../translations";
import style from "./style";

function Flights({ getAirports, locale }) {
  getAirports();

  return (
    <IntlProvider locale={locale} messages={loadTranslations(locale)}>
      <div css={style}>
        <Header />
        <Filter />
        <Body />
        <Footer />
      </div>
    </IntlProvider>
  );
}

const mapStateToProps = state => ({
  locale: state.localization.locale
});

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { getAirports as getAirportsAction } from "../../../actions/index";
import loadTranslations from "../../../translations";
import Body from "../../organisms/Body";
import Filter from "../../organisms/Filter";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import style from "./style";
import Menu from "../../organisms/Menu";

function Flights({ getAirports, locale }) {
  getAirports();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);
  const openMenu = () => setMenuIsOpen(true);

  return (
    <IntlProvider locale={locale} messages={loadTranslations(locale)}>
      <div css={style}>
        <Header openMenu={openMenu} />
        {menuIsOpen && <Menu close={closeMenu} />}
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

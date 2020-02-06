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
import themes from "../../../theme";
import Menu from "../../organisms/Menu";
import { ThemeProvider } from "emotion-theming";

function Flights({ getAirports, locale, theme }) {
  getAirports();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const closeMenu = () => setMenuIsOpen(false);
  const openMenu = () => setMenuIsOpen(true);

  return (
    <ThemeProvider theme={themes[theme]}>
      <IntlProvider locale={locale} messages={loadTranslations(locale)}>
        <div css={style}>
          <Header openMenu={openMenu} />
          {menuIsOpen && <Menu close={closeMenu} />}
          <Filter />
          <Body />
          <Footer />
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  locale: state.localization.locale,
  theme: state.theme.name
});

const mapDispatchToProps = {
  getAirports: () => getAirportsAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Flights);

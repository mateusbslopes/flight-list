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
import { Global, css } from "@emotion/core";

function Flights({ getAirports, locale, theme }) {
  getAirports();

  let menuWrapperRef = React.createRef();

  const toggleMenu = () => {
    const wrapper = menuWrapperRef.current;
    wrapper.classList.toggle("is-menu-open");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <IntlProvider locale={locale} messages={loadTranslations(locale)}>
        <div css={style}>
          <Global
            styles={css`
              html {
                background-color: ${themes[theme].colors.ternary[500]};
              }
            `}
          />

          <Header openMenu={toggleMenu} />
          <Menu bodyRef={menuWrapperRef} close={toggleMenu} />

          <Body />

          <Filter />
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

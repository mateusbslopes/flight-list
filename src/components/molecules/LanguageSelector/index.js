import React from "react";
import { connect } from "react-redux";
import { setLocale as setLocaleAction } from "../../../actions";
import style from "./style";
import FlagIcon from "../../atoms/FlagIcon";

let locales = [
  {
    code: "en-US",
    label: "English (US)",
    flag: "brazil"
  },
  {
    code: "pt-BR",
    label: "Português (Brasil)",
    flag: "united-states-of-america"
  }
];

let LanguageSelector = ({ selectedLocale, setLocale }) => {
  return (
    <select
      css={theme => style(theme)}
      onChange={evt => setLocale(evt.target.value)}
      value={selectedLocale}
    >
      {locales.map(locale => (
        <option key={locale.code} value={locale.code}>
          <FlagIcon name={locale.flag} />
          {locale.label}
        </option>
      ))}
    </select>
  );
};

let mapStateToProps = state => ({
  selectedLocale: state.localization.locale
});

let mapDispachToProps = {
  setLocale: locale => setLocaleAction(locale)
};

export default connect(mapStateToProps, mapDispachToProps)(LanguageSelector);

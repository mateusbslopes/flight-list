import React from "react";
import { connect } from "react-redux";
import { setLocale as setLocaleAction } from "../../../actions";
import FlagIcon from "../../atoms/FlagIcon";
import style from "./style";

let locales = [
  {
    code: "en-US",
    label: "English (US)",
    flag: "united-states-of-america"
  },
  {
    code: "pt-BR",
    label: "Português (Brasil)",
    flag: "brazil"
  }
];

let LanguageSelector = ({ selectedLocale, setLocale }) => {
  const flagName = locales.find(locale => locale.code === selectedLocale).flag;

  return (
    <div>
      <FlagIcon name={flagName} htmlFor="locale-select" />
      <select
        id="locale-select"
        css={theme => style(theme)}
        onChange={evt => setLocale(evt.target.value)}
        value={selectedLocale}
      >
        {locales.map(locale => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
};

let mapStateToProps = state => ({
  selectedLocale: state.localization.locale
});

let mapDispachToProps = {
  setLocale: locale => setLocaleAction(locale)
};

export default connect(mapStateToProps, mapDispachToProps)(LanguageSelector);

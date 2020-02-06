import React from "react";
import { connect } from "react-redux";
import { setLocale as setLocaleAction } from "../../../actions";
import style from "./style";

let locales = [
  {
    code: "en-US",
    label: "English (US)"
  },
  {
    code: "pt-BR",
    label: "Português (Brasil)"
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

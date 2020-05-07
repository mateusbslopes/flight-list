import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import { connect } from "react-redux";
import { setTheme as setThemeAction } from "../../../actions";

function ThemeSelector({ theme, setTheme }) {
  const checked = theme === "dark";

  const toggleTheme = () => {
    let newTheme = checked ? "base" : "dark";
    setTheme(newTheme);
  };

  return (
    <div css={theme => style(theme)}>
      <Icon name="icon-max-travel-night" />
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.name
});

const mapDispachToProps = {
  setTheme: theme => setThemeAction(theme)
};

export default connect(mapStateToProps, mapDispachToProps)(ThemeSelector);

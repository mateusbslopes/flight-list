import React from "react";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";
import LanguageSelector from "../../molecules/LanguageSelector";
import Search from "../Search";
import style from "./style";
import Icon from "../../atoms/Icon";
import ThemeSelector from "../../molecules/ThemeSelector";

export default function Header({ openMenu }) {
  return (
    <header className="header-content" css={theme => style(theme)}>
      <section className="flex-row flex-row--space-between presentation">
        <div className="flex-row presentation">
          <Icon name="icon-max-navigation-menu" onClick={openMenu} />
          <HeaderTitle />
        </div>
        <ThemeSelector />
        <LanguageSelector />
      </section>

      <Search />
      <HeaderNavigation />
    </header>
  );
}

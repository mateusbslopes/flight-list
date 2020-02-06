import React from "react";
import Search from "../Search";
import style from "./style";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";
import LanguageSelector from "../../molecules/LanguageSelector";

export default function Header() {
  return (
    <header className="header-content" css={theme => style(theme)}>
      <section className="flex-row flex-row--space-between presentation">
        <HeaderTitle />
        <LanguageSelector />
      </section>

      <Search />
      <HeaderNavigation />
    </header>
  );
}

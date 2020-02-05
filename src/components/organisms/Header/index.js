import React from "react";
import Search from "../Search";
import style from "./style";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";

export default function Header() {
  return (
    <header className="header-content" css={theme => style(theme)}>
      <HeaderTitle />
      <Search />
      <HeaderNavigation />
    </header>
  );
}

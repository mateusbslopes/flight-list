import React from "react";
import Search from "../Search";
import style from "./style";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";

export default function Header() {
  return (
    <div css={style}>
      <div className="header-content">
        <HeaderTitle />
        <Search />
        <HeaderNavigation />
      </div>
    </div>
  );
}

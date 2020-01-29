import React from "react";
import Search from "../Search";
import style from "./style";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";

class Header extends React.Component {
  render() {
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
}

export default Header;

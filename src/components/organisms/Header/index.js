import React from "react";
import Filter from "../Filter";
import style from "./style";
import HeaderTitle from "../../atoms/HeaderTitle";
import HeaderNavigation from "../../molecules/HeaderNavigation";

class Header extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className="header-content">
          <HeaderTitle />
          <Filter />
          <HeaderNavigation />
        </div>
      </div>
    );
  }
}

export default Header;

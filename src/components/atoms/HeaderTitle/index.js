import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";

class HeaderTitle extends React.Component {
  render() {
    return (
      <div css={style} className="row">
        <Icon
          name="icon-max-navigation-menu"
          size="big"
          color="rgb(26, 188, 156)"
        />
        <Text size="big">Teste Front</Text>
      </div>
    );
  }
}

export default HeaderTitle;

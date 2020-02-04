import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";

export default function HeaderTitle() {
  return (
    <div css={theme => style(theme)} className="row">
      <Icon name="icon-max-navigation-menu" />
      <Text size={600}>appTitle</Text>
    </div>
  );
}

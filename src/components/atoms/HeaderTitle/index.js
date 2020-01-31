import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";

export default function HeaderTitle() {
  return (
    <div css={theme => style(theme)} className="row">
      <Icon
        name="icon-max-navigation-menu"
        size="big"
        color="rgb(26, 188, 156)"
      />
      <Text size="big">Teste Front</Text>
    </div>
  );
}

import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import { FormattedMessage } from "react-intl";

export default function HeaderTitle() {
  return (
    <div css={theme => style(theme)} className="row">
      <Icon name="icon-max-navigation-menu" />
      <h1>
        <FormattedMessage id="appTitle" />
      </h1>
    </div>
  );
}

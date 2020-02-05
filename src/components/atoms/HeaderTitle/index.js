import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import { FormattedMessage } from "react-intl";
import Heading from "../Heading";

export default function HeaderTitle() {
  return (
    <div css={theme => style(theme)} className="row">
      <Icon name="icon-max-navigation-menu" />
      <Heading level={1}>
        <FormattedMessage id="appTitle" />
      </Heading>
    </div>
  );
}

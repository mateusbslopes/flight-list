import React from "react";
import { FormattedMessage } from "react-intl";
import Icon from "../../atoms/Icon";
import Heading from "../Heading";
import style from "./style";

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

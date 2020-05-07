import React from "react";
import { FormattedMessage } from "react-intl";
import Heading from "../Heading";
import style from "./style";

export default function HeaderTitle() {
  return (
    <div css={theme => style(theme)} className="row">
      <Heading level={1}>
        <FormattedMessage id="appTitle" />
      </Heading>
    </div>
  );
}

import React from "react";
import style from "./style";
import { FormattedMessage } from "react-intl";

export default function Text({ children, color, values }) {
  return (
    <div css={theme => style(theme, color)}>
      <FormattedMessage id={String(children)} values={values} />
    </div>
  );
}

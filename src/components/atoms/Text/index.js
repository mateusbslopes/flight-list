import React from "react";
import style from "./style";
import { FormattedMessage } from "react-intl";

export default function Text({ children, size, color, weight, values }) {
  return (
    <div css={theme => style(theme, size, weight, color)}>
      <FormattedMessage id={String(children)} values={values} />
    </div>
  );
}

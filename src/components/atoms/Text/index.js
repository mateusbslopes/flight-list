import React from "react";
import style from "./style";
import i18next from "i18next";

export default function Text({ children, size, color, weight, values }) {
  return (
    <div css={theme => style(theme, size, weight, color)}>
      {i18next.t(children, { ...values })}
    </div>
  );
}

import React from "react";
import style from "./style";

export default function Text({ children, size, color, weight }) {
  return <div css={theme => style(theme, size, weight, color)}>{children}</div>;
}

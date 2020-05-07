import React from "react";
import style from "./style";

export default function Button({
  onClick,
  background,
  border,
  children,
  invertColors
}) {
  return (
    <div onClick={onClick} css={theme => style(theme, border, invertColors)}>
      {children}
    </div>
  );
}

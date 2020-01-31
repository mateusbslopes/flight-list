import React from "react";
import style from "./style";

export default function Button({ onClick, background, border, children }) {
  return (
    <div onClick={onClick} css={theme => style(theme, background, border)}>
      {children}
    </div>
  );
}

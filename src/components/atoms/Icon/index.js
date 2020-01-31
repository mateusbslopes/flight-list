import React from "react";
import style from "./style";

export default function Icon({ name, color, size, onClick }) {
  return (
    <i
      className={name}
      css={theme => style(theme, color, size)}
      onClick={onClick}
    />
  );
}

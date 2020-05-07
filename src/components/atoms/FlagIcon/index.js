import React from "react";
import style from "./style";

export default function FlagIcon({ name }) {
  return <img css={style} src={`./assets/icons/flags/${name}.png`} />;
}

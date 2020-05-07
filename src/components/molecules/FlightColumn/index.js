import React from "react";
import style from "./style";

export default function FlightColumn({ text, info }) {
  return (
    <div css={style}>
      <strong>{text}</strong>
      <p weight={500}>{info}</p>
    </div>
  );
}

import React from "react";
import style from "./style";
import Text from "../../atoms/Text/index";

export default function FlightColumn({ text, info }) {
  return (
    <div css={style}>
      <Text>{text}</Text>
      <Text weight={500}>{info}</Text>
    </div>
  );
}

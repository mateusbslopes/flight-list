import React from "react";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import style from "./style";

export default function FlightDetailButton() {
  return (
    <Button
      background={{ color: "ternary", strength: 500 }}
      border={{ color: "secundary", strength: 600 }}
    >
      <div css={style}>
        <Icon name="icon-max-action-add" />
        <Text>DETALHES DO VOO</Text>
      </div>
    </Button>
  );
}

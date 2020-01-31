import React from "react";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import style from "./style";

export default function FlightDetailButton() {
  return (
    <Button border={{ color: "secundary", strength: 600 }}>
      <div css={style}>
        <Icon
          name="icon-max-action-add"
          size="small"
          color="rgb(26, 188, 156)"
        />
        <Text>DETALHES DO VOO</Text>
      </div>
    </Button>
  );
}

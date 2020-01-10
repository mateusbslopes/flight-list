import React from "react";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";
import style from "./style";

class FlightDetailButton extends React.Component {
  render() {
    return (
      <Button borderColor={"rgb(135, 147, 149)"}>
        <div css={style}>
          <Icon name="action-add" size={"small"} color={"rgb(26, 188, 156)"} />
          <Text>DETALHES DO VOO</Text>
        </div>
      </Button>
    );
  }
}

export default FlightDetailButton;

import React from "react";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import style from "./style";
import { FormattedMessage } from "react-intl";

export default function FlightDetailButton() {
  return (
    <Button invertColors={true}>
      <div css={style}>
        <Icon name="icon-max-action-add" />
        <FormattedMessage id="flightDetails" />
      </div>
    </Button>
  );
}

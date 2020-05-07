import React from "react";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import style from "./style";

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

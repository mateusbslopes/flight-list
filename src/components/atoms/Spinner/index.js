import React from "react";
import Icon from "../Icon";
import style from "./style";
import { FormattedMessage } from "react-intl";

export default function Spinner({ label, onChange, value }) {
  return (
    <div css={theme => style(theme)}>
      <label>
        <FormattedMessage id={label} />
      </label>
      <div className="options-item-config">
        <Icon
          name="icon-max-action-remove"
          onClick={() => onChange(value - 1)}
        />
        <p>{value}</p>
        <Icon name="icon-max-action-add" onClick={() => onChange(value + 1)} />
      </div>
    </div>
  );
}

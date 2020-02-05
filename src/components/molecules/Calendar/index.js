import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import { FormattedMessage } from "react-intl";

export default function Calendar({ label, value, handleChange }) {
  return (
    <div css={theme => style(theme)}>
      <div className="calendar-content">
        <label>
          <FormattedMessage id={label} />
        </label>
        <div className="col-sm-16">
          <input
            className="calendar-input col-sm-8"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <Icon name="max-icon-action-calendar" />
        </div>
      </div>
    </div>
  );
}

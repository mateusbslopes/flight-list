import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";

export default function Calendar({ label, value, handleChange }) {
  return (
    <div css={style}>
      <div>
        <div className="calendar-label">{label}</div>
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

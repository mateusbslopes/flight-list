import React from "react";
import { FormattedMessage } from "react-intl";
import style from "./style";

export default function RadioList({
  data,
  valueKey,
  displayKey,
  label,
  value,
  onChange
}) {
  return (
    <div css={style}>
      <label>
        <FormattedMessage id={label} />
      </label>
      {data.map(item => (
        <div
          className="radio-option"
          key={item[valueKey]}
          onClick={() => onChange(item)}
        >
          <div className="radio-button">
            {value[valueKey] === item[valueKey] && (
              <div className="radio-button-icon"></div>
            )}
          </div>
          <FormattedMessage id={item[displayKey]} />
        </div>
      ))}
    </div>
  );
}

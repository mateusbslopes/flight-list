import React from "react";
import Text from "../../atoms/Text";
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
      <Text size={300} weight={500}>
        {label}
      </Text>
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
          <Text size={300} weight={500}>
            {item[displayKey]}
          </Text>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

export default function Spinner({ label, onChange, value }) {
  return (
    <div css={theme => style(theme)}>
      <Text weight={500} size={300}>
        {label}
      </Text>
      <div className="options-item-config">
        <Icon
          name="icon-max-action-remove"
          onClick={() => onChange(value - 1)}
        />
        <Text>{value}</Text>
        <Icon name="icon-max-action-add" onClick={() => onChange(value + 1)} />
      </div>
    </div>
  );
}

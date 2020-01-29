import React, { useState } from "react";
import Icon from "../Icon";
import Text from "../Text";

export default function Spinner({ label, onChange, value }) {
  return (
    <div className="options-item">
      <Text weight="light" size="medium-small">
        {label}
      </Text>
      <div className="options-item-config">
        <Icon
          size="big"
          name="icon-max-action-remove"
          color="rgb(26, 188, 156)"
          onClick={() => onChange(value - 1)}
        />
        <Text>{value}</Text>
        <Icon
          size="big"
          name="icon-max-action-add"
          color="rgb(26, 188, 156)"
          onClick={() => onChange(value + 1)}
        />
      </div>
    </div>
  );
}

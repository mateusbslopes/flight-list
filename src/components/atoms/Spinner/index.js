import React, { useState } from "react";
import Icon from "../Icon";
import Text from "../Text";

export default function Spinner({ label, onChange, value }) {
  return (
    <div className="options-item">
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

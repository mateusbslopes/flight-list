import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

export default function Checkbox({ toggle, label, checked, id }) {
  return (
    <div css={style}>
      <div className="checkbox" onClick={() => toggle(id)}>
        {checked && (
          <Icon name="icon-check" color="rgb(26,188,156)" size="small" />
        )}
      </div>
      <div className="checkbox-label">
        <Text weight="light" size="medium-small">
          {label}
        </Text>
      </div>
    </div>
  );
}

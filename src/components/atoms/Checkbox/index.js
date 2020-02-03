import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

export default function Checkbox({ toggle, label, checked, id }) {
  return (
    <div css={theme => style(theme)} onClick={() => toggle(id)}>
      <div className="checkbox">
        {checked && <Icon name="icon-check" size={200} />}
      </div>
      <div className="checkbox-label">
        <Text weight={100} size={300}>
          {label}
        </Text>
      </div>
    </div>
  );
}

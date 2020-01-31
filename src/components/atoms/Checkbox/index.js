import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

export default function Checkbox({ toggle, label, checked, id }) {
  return (
    <div css={theme => style(theme)}>
      <div className="checkbox" onClick={() => toggle(id)}>
        {checked && <Icon name="icon-check" size={200} />}
      </div>
      <div className="checkbox-label">
        <Text weight="light" size="medium-small">
          {label}
        </Text>
      </div>
    </div>
  );
}

import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

export default function Checkbox({ toggle, children, checked, id }) {
  return (
    <div css={theme => style(theme)} onClick={() => toggle(id)}>
      <div className="checkbox">
        {checked && <Icon name="icon-check" size={200} />}
      </div>
      <div className="checkbox-label">{children}</div>
    </div>
  );
}

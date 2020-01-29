import React from "react";
import Icon from "../Icon";
import Text from "../Text";
import style from "./style";

class Checkbox extends React.Component {
  render() {
    const { toggle, label, checked, id } = this.props;

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
}

export default Checkbox;

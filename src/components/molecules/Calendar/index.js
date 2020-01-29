import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";

class Calendar extends React.Component {
  render() {
    const { label, value, handleChange } = this.props;
    return (
      <div css={style}>
        <div>
          <div className="calendar-label">{label}</div>
          <div className="col-sm-16">
            <input
              className="calendar-input col-sm-8"
              type="text"
              value={value}
              onChange={handleChange}
            />
            <Icon
              color="rgb(26, 188, 156)"
              size="big"
              name="max-icon-action-calendar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

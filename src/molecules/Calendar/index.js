import React from "react";
import style from "./style";
import Icon from "../../atoms/Icon";

class Calendar extends React.Component {
  render() {
    return (
      <div css={style}>
        <div>
          <div className="calendar-label">{this.props.label}</div>
          <div className="col-sm-16">
            <input
              className="calendar-input col-sm-8"
              type="text"
              value={this.props.value}
              onChange={this.props.handleChange}
            />
            <Icon color="rgb(26, 188, 156)" size="big" name="action-calendar" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;

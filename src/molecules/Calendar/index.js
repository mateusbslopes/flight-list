import React from "react";
import style from "./style";

class Calendar extends React.Component {
  render() {
    return (
      <div css={style}>
        <div>
          <div className="calendar-label">{this.props.label}</div>
          <input
            className="calendar-input"
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;

import React from "react";
import style from "../Text/style";

class Divider extends React.Component {
  render() {
    return <div css={style(this.props.direction)}></div>;
  }
}

export default Divider;

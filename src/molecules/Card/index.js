import React from "react";
import style from "./style";

class Card extends React.Component {
  render() {
    return (
      <div css={() => style(this.props.margin)}>
        <div className="content">
          {this.props.header && (
            <div className="header">{this.props.header}</div>
          )}

          {this.props.body && (
            <div className="card-body">{this.props.body}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;

import React from "react";
import style from "./style";

class Card extends React.Component {
  render() {
    const { margin, header, body } = this.props;

    return (
      <div css={() => style(margin)}>
        <div className="content">
          {header && <div className="header">{header}</div>}

          {body && <div className="card-body">{body}</div>}
        </div>
      </div>
    );
  }
}

export default Card;

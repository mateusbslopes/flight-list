import React from "react";
import style from "./style";

export default function Card({ margin, header, body }) {
  return (
    <div css={() => style(margin)}>
      <div className="content">
        {header && <div className="header">{header}</div>}

        {body && <div className="card-body">{body}</div>}
      </div>
    </div>
  );
}

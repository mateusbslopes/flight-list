import React from "react";
import style from "./style";

export default function Text({ children, size, color, weight }) {
  return <div css={() => style(size, weight, color)}>{children}</div>;
}

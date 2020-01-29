import React from "react";
import style from "./style";

export default function Button({
  onClick,
  borderColor,
  backgroundColor,
  borderBottomColor,
  children
}) {
  return (
    <div
      onClick={onClick}
      css={() => style(borderColor, backgroundColor, borderBottomColor)}
    >
      {children}
    </div>
  );
}

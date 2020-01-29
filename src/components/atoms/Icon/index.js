import React from "react";
import style from "./style";

export default function Icon({ name, color, size, onClick }) {
  return (
    <i className={name} css={() => style(color, size)} onClick={onClick} />
  );
}

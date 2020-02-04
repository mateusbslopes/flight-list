import React from "react";
import style from "./style";
import Spinner from "../../atoms/Spinner";

export default function Passengers({
  adults,
  onChangeAdults,
  children,
  onChangeChildren,
  infants,
  onChangeInfants
}) {
  return (
    <div css={theme => style(theme)}>
      <div className="options col-sm-6">
        <div className="options-item">
          <Spinner label="adults" value={adults} onChange={onChangeAdults} />
        </div>
        <div className="options-item">
          <Spinner
            label="children"
            value={children}
            onChange={onChangeChildren}
          />
        </div>
        <div className="options-item">
          <Spinner label="infants" value={infants} onChange={onChangeInfants} />
        </div>
      </div>
    </div>
  );
}

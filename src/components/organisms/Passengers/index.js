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
          <Spinner
            label="Adultos"
            value={adults}
            onChange={onChangeAdults}
            min={1}
          />
        </div>
        <div className="options-item">
          <Spinner
            label="Criancas"
            value={children}
            onChange={onChangeChildren}
          />
        </div>
        <div className="options-item">
          <Spinner label="Bebe" value={infants} onChange={onChangeInfants} />
        </div>
      </div>
    </div>
  );
}

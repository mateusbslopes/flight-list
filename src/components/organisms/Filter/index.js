import React from "react";
import { connect } from "react-redux";
import style from "./style";
import {
  closeFilter as closeFilterAction,
  toggleAirline as toggleAirlineAction
} from "../../../actions";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Checkbox from "../../atoms/Checkbox";

function Filter({
  airlines,
  toggleAirline,
  filter,
  closeFilter,
  displayedFlights
}) {
  if (!filter.isOpen) return null;

  return (
    <div css={style}>
      <div className="header">
        <div className="title">
          <Text color="ternary">Filtre seus resultados por</Text>
        </div>
        <div onClick={closeFilter}>
          <Icon name="icon-max-navigation-close" />
        </div>
      </div>

      <div className="body">
        <Text>Selecione a companhia aeria:</Text>
        {airlines.map(airline => (
          <Checkbox
            key={airline.label}
            id={airline.label}
            label={`${airline.label.charAt(0).toUpperCase() +
              airline.label.slice(1)} (${airline[displayedFlights]} voos)`}
            toggle={toggleAirline}
            checked={airline.checked}
          />
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  airlines: state.airlines,
  filter: state.filter,
  displayedFlights: state.flights.displayed
});

const mapDispatchToProps = {
  toggleAirline: airlineLabel => toggleAirlineAction(airlineLabel),
  closeFilter: () => closeFilterAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

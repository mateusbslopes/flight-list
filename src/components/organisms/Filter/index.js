import React from "react";
import { connect } from "react-redux";
import style from "./style";
import {
  closeFilter as closeFilterAction,
  toggleAirline as toggleAirlineAction,
  toggleOutboundHour as toggleOutboundHourAction
} from "../../../actions";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Checkbox from "../../atoms/Checkbox";

function Filter({
  airlines,
  toggleAirline,
  filter,
  closeFilter,
  displayedFlights,
  toggleOutboundHour
}) {
  if (!filter.isOpen) return null;

  return (
    <div css={theme => style(theme)}>
      <div className="header">
        <div className="title">
          <Text color="ternary">Filtre seus resultados por: </Text>
        </div>
        <div onClick={closeFilter}>
          <Icon name="icon-max-navigation-close" />
        </div>
      </div>

      <div className="body">
        <Text>Companhia aeria:</Text>
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
        <Text>Horário de partida:</Text>
        <Checkbox
          id={"morning"}
          label={`Manhã - 06:00 às 11:59`}
          toggle={() => toggleOutboundHour("morning")}
          checked={filter.outboundHour.morning.checked}
        />
        <Checkbox
          id={"afternoon"}
          label={`Tarde - 12:00 às 17:59`}
          toggle={() => toggleOutboundHour("afternoon")}
          checked={filter.outboundHour.afternoon.checked}
        />
        <Checkbox
          id={"night"}
          label={`Noite - 18:00 às 23:59`}
          toggle={() => toggleOutboundHour("night")}
          checked={filter.outboundHour.night.checked}
        />
        <Checkbox
          id={"dawn"}
          label={`Madrugada - 00:00 às 05:59`}
          toggle={() => toggleOutboundHour("dawn")}
          checked={filter.outboundHour.dawn.checked}
        />
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
  closeFilter: () => closeFilterAction(),
  toggleOutboundHour: time => toggleOutboundHourAction(time)
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

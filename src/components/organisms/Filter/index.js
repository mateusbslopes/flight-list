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
import { FormattedMessage } from "react-intl";

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
          <Text color="ternary">filterHeader</Text>
        </div>
        <div onClick={closeFilter}>
          <Icon name="icon-max-navigation-close" />
        </div>
      </div>

      <div className="body">
        <section className="flex-column">
          <FormattedMessage id="airlineFilter" />
          {airlines.map(airline => (
            <div className="flex-row">
              <Checkbox
                key={airline.label}
                id={airline.label}
                toggle={toggleAirline}
                checked={airline.checked}
              >
                <div className="flex-row">
                  <p>
                    {airline.label.charAt(0).toUpperCase() +
                      airline.label.slice(1)}
                  </p>
                  <FormattedMessage
                    id={`(${airline[displayedFlights]} voos)`}
                  />
                </div>
              </Checkbox>
            </div>
          ))}
        </section>
        <FormattedMessage id="outboundHourExtended" />
        <Checkbox
          id={"morning"}
          toggle={() => toggleOutboundHour("morning")}
          checked={filter.outboundHour.morning.checked}
        >
          <FormattedMessage
            id="morningFilter"
            values={{ startHour: "06:00", endHour: "11:59" }}
          />
        </Checkbox>

        <Checkbox
          id={"afternoon"}
          toggle={() => toggleOutboundHour("afternoon")}
          checked={filter.outboundHour.afternoon.checked}
        >
          <FormattedMessage
            id="afternoonFilter"
            values={{ startHour: "12:00", endHour: "17:59" }}
          />
        </Checkbox>
        <Checkbox
          id={"night"}
          toggle={() => toggleOutboundHour("night")}
          checked={filter.outboundHour.night.checked}
        >
          <FormattedMessage
            id="nightFilter"
            values={{ startHour: "18:00", endHour: "23:59" }}
          />
        </Checkbox>
        <Checkbox
          id={"dawn"}
          toggle={() => toggleOutboundHour("dawn")}
          checked={filter.outboundHour.dawn.checked}
        >
          <FormattedMessage
            id="dawnFilter"
            values={{ startHour: "00:00", endHour: "05:59" }}
          />
        </Checkbox>
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

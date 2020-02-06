import React from "react";
import { FormattedMessage, FormattedTime, useIntl } from "react-intl";
import { connect } from "react-redux";
import {
  closeFilter as closeFilterAction,
  toggleAirline as toggleAirlineAction,
  toggleOutboundHour as toggleOutboundHourAction
} from "../../../actions";
import Checkbox from "../../atoms/Checkbox";
import Icon from "../../atoms/Icon";
import Card from "../../molecules/Card";
import style from "./style";

function Filter({
  airlines,
  toggleAirline,
  filter,
  closeFilter,
  displayedFlights,
  toggleOutboundHour
}) {
  if (!filter.isOpen) return null;

  const intl = useIntl();

  return (
    <div css={theme => style(theme)}>
      <Card
        header={
          <div className="header">
            <FormattedMessage id="filterHeader" />
            <div onClick={closeFilter}>
              <Icon name="icon-max-navigation-close" />
            </div>
          </div>
        }
      />

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
                  {"("}
                  <FormattedMessage
                    id="flightAmount"
                    values={{ flightsCount: airline[displayedFlights] }}
                  />
                  {")"}
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
            values={{
              startHour: <FormattedTime value={new Date(0, 0, 0, 6)} />,
              endHour: <FormattedTime value={new Date(0, 0, 0, 11, 59)} />
            }}
          />
        </Checkbox>

        <Checkbox
          id={"afternoon"}
          toggle={() => toggleOutboundHour("afternoon")}
          checked={filter.outboundHour.afternoon.checked}
        >
          <FormattedMessage
            id="afternoonFilter"
            values={{
              startHour: <FormattedTime value={new Date(0, 0, 0, 12)} />,
              endHour: <FormattedTime value={new Date(0, 0, 0, 17, 59)} />
            }}
          />
        </Checkbox>
        <Checkbox
          id={"night"}
          toggle={() => toggleOutboundHour("night")}
          checked={filter.outboundHour.night.checked}
        >
          <FormattedMessage
            id="nightFilter"
            values={{
              startHour: <FormattedTime value={new Date(0, 0, 0, 18)} />,
              endHour: <FormattedTime value={new Date(0, 0, 0, 23, 59)} />
            }}
          />
        </Checkbox>
        <Checkbox
          id={"dawn"}
          toggle={() => toggleOutboundHour("dawn")}
          checked={filter.outboundHour.dawn.checked}
        >
          <FormattedMessage
            id="dawnFilter"
            values={{
              startHour: <FormattedTime value={new Date(0, 0, 0, 0)} />,
              endHour: <FormattedTime value={new Date(0, 0, 0, 5, 59)} />
            }}
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

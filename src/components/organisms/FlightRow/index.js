import React from "react";
import FlightColumn from "../../molecules/FlightColumn";
import style from "./style";
import FlightDetailButton from "../../molecules/FlightDetailButton";
import FlightPrice from "../../molecules/FlightPrice";
import Card from "../../molecules/Card";
import { useIntl, FormattedMessage, FormattedTime } from "react-intl";

export default function FlightRow({
  id,
  airline,
  flightNumber,
  departureDate,
  from,
  duration,
  trips,
  arrivalDate,
  to,
  pricing
}) {
  const intl = useIntl();

  function formatAirline(airline) {
    return airline.toUpperCase();
  }

  function formatHour(date) {
    return <FormattedTime value={new Date(date)} />;
  }

  function formatDuration(duration) {
    let hour = Math.trunc(duration / 60);
    let minutes = duration % 60;
    let text = hour ? `${hour}H` : "";
    text += text
      ? minutes || ""
      : `${minutes} ${intl.formatMessage({ id: "minutes" })}`;
    return text;
  }

  return (
    <div css={theme => style(theme)}>
      <Card
        body={
          <div className="flight-row-content" key={id}>
            <div className="flight-row-descriptions">
              <FlightColumn text={formatAirline(airline)} info={flightNumber} />
              <FlightColumn text={formatHour(departureDate)} info={from} />
              <FlightColumn
                text={formatDuration(duration)}
                info={
                  <FormattedMessage
                    id="stopAmount"
                    values={{ stopCount: trips.length }}
                  />
                }
              />
              <FlightColumn text={formatHour(arrivalDate)} info={to} />
            </div>
            <div className="flight-row-action">
              <FlightPrice pricing={pricing} />
            </div>
            <div className="flight-row-action">
              <FlightDetailButton />
            </div>
          </div>
        }
      />
    </div>
  );
}

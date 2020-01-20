import React from "react";
import FlightColumn from "../../molecules/FlightColumn";
import style from "./style";
import FlightDetailButton from "../../molecules/FlightDetailButton";
import FlightPrice from "../../molecules/FlightPrice";
import Card from "../../molecules/Card";

class FlightRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    // FlightController.getAirports().then();
  }

  componentDidMount() {
    this.setState(this.state);
  }

  formatAirline(airline) {
    return airline.toUpperCase();
  }

  formatHour(date) {
    return new Date(date).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false
    });
  }

  formatDuration(duration) {
    let hour = Math.trunc(duration / 60);
    let minutes = duration % 60;
    let text = hour ? `${hour}H` : "";
    text += text ? minutes || "" : `${minutes} minutos`;
    return text;
  }

  formatStops(stops) {
    return stops > 1 ? `${stops} paradas` : `${stops} parada`;
  }

  render() {
    return (
      <div css={style}>
        <Card
          body={
            <div className="flight-row-content" key={this.state.id}>
              <div className="flight-row-descriptions">
                <FlightColumn
                  text={this.formatAirline(this.state.airline)}
                  info={this.state.flightNumber}
                />
                <FlightColumn
                  text={this.formatHour(this.state.departureDate)}
                  info={this.state.from}
                />
                <FlightColumn
                  text={this.formatDuration(this.state.duration)}
                  info={this.formatStops(this.state.trips.length)}
                />
                <FlightColumn
                  text={this.formatHour(this.state.arrivalDate)}
                  info={this.state.to}
                />
              </div>
              <div className="flight-row-action">
                <FlightPrice />
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
}

export default FlightRow;

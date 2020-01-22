import React from "react";
import FlightList from "../FlightList";
import style from "./style";

class Body extends React.Component {
  render() {
    return (
      <div css={style}>
        {this.props.flights ? (
          <FlightList flights={this.props.flights} />
        ) : (
          "Nada a mostrar"
        )}
      </div>
    );
  }
}

export default Body;

import React from "react";
import { connect } from "react-redux";
import {
  setDisplayedFlights as setDisplayedFlightsAction,
  DisplayableFlights
} from "../../../actions";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";

function HeaderNavigation({ setDisplayedFlights, displayed }) {
  return (
    <div className="row" css={theme => style(theme)}>
      <div
        className={
          "header-navigation-item col-sm-8 header-navigation-item-first" +
          (displayed == DisplayableFlights.OUTBOUND
            ? " header-navigation-item-selected"
            : "")
        }
      >
        <Button
          background={{ color: "ternary", strength: 500 }}
          onClick={() => setDisplayedFlights(DisplayableFlights.OUTBOUND)}
        >
          <Text>outboundNavigation</Text>
        </Button>
      </div>
      <div
        className={
          "header-navigation-item col-sm-8" +
          (displayed == DisplayableFlights.INBOUND
            ? " header-navigation-item-selected"
            : "")
        }
      >
        <Button
          background={{ color: "ternary", strength: 500 }}
          onClick={() => setDisplayedFlights(DisplayableFlights.INBOUND)}
        >
          <Text>inboundNavigation</Text>
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  displayed: state.flights.displayed
});

const mapDispachToProps = {
  setDisplayedFlights: displayed => setDisplayedFlightsAction(displayed)
};

export default connect(mapStateToProps, mapDispachToProps)(HeaderNavigation);

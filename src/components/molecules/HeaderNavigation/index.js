import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  DisplayableFlights,
  setDisplayedFlights as setDisplayedFlightsAction
} from "../../../actions";
import Button from "../../atoms/Button";
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
          invertColors={true}
          onClick={() => setDisplayedFlights(DisplayableFlights.OUTBOUND)}
        >
          <FormattedMessage id="outboundNavigation" />
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
          invertColors={true}
          onClick={() => setDisplayedFlights(DisplayableFlights.INBOUND)}
        >
          <FormattedMessage id="inboundNavigation" />
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

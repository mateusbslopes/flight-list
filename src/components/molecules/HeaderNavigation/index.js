import React from "react";
import { connect } from "react-redux";
import {
  setDisplayedFlights as setDisplayedFlightsAction,
  DisplayableFlights
} from "../../../actions";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";

class HeaderNavigation extends React.Component {
  render() {
    const { setDisplayedFlights, displayed } = this.props;

    return (
      <div className="row" css={style}>
        <div
          className={
            "header-navigation-item col-sm-8 header-navigation-item-first" +
            (displayed == DisplayableFlights.OUTBOUND
              ? " header-navigation-item-selected"
              : "")
          }
        >
          <Button
            onClick={() => setDisplayedFlights(DisplayableFlights.OUTBOUND)}
          >
            <Text>Selecione sua ida</Text>
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
            onClick={() => setDisplayedFlights(DisplayableFlights.INBOUND)}
          >
            <Text>Selecione sua volta</Text>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayed: state.flights.displayed
});

const mapDispachToProps = {
  setDisplayedFlights: displayed => setDisplayedFlightsAction(displayed)
};

export default connect(mapStateToProps, mapDispachToProps)(HeaderNavigation);

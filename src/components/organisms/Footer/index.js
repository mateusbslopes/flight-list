import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { openFilter as openFilterAction } from "../../../actions";
import style from "./style";

function Footer({ openFilter, flights }) {
  let hasFlightsToFilter =
    flights.outbound.length > 0 || flights.inbound.length > 0;

  return (
    <div css={theme => style(theme)}>
      <div
        className="action action-first"
        onClick={() => hasFlightsToFilter && openFilter()}
      >
        <FormattedMessage id="filterFlights" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  flights: state.flights
});

const mapDispatchToProps = {
  openFilter: () => openFilterAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

// LOADING MADE BY https://loading.io/css/
// LICENSE: CC0 License
// 01/2020

import React from "react";
import FlightList from "../FlightList";
import style from "./style";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

function Body({ isFetching, hasItems, hasSearched }) {
  return (
    <div css={theme => style(theme)}>
      <div className="header-info">
        {isFetching && (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {!isFetching && !hasItems && hasSearched && (
          <FormattedMessage id="noSearchResultMessage" />
        )}
        {!isFetching && !hasItems && !hasSearched && (
          <FormattedMessage id="neverSearchedMessage" />
        )}
      </div>

      {hasItems && <FlightList />}
    </div>
  );
}

const mapStateToProps = state => ({
  isFetching: state.flights.isFetching,
  hasSearched: state.flights.hasSearched,
  hasItems:
    state.flights.outbound.length > 0 || state.flights.inbound.length > 0
});

export default connect(mapStateToProps)(Body);

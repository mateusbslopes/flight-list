// LOADING MADE BY https://loading.io/css/
// LICENSE: CC0 License
// 01/2020

import React from "react";
import FlightList from "../FlightList";
import style from "./style";
import Text from "../../atoms/Text";
import { connect } from "react-redux";

class Body extends React.Component {
  render() {
    const { isFetching, hasItems, hasSearched } = this.props;

    return (
      <div css={style}>
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
            <Text>Opa, nao encontramos voos! Tente para um outro lugar.</Text>
          )}
          {!isFetching && !hasItems && !hasSearched && (
            <Text>Faca uma pesquisa!</Text>
          )}
        </div>

        {hasItems && <FlightList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.flights.isFetching,
  hasSearched: state.flights.hasSearched,
  hasItems:
    state.flights.outbound.length > 0 || state.flights.inbound.length > 0
});

export default connect(mapStateToProps)(Body);

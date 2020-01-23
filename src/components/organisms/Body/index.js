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
        {isFetching && <Text>Carregando</Text>}
        {hasItems && <FlightList />}
        {!isFetching && !hasItems && hasSearched && (
          <Text>Opa, nao encontramos voos! Tente para um outro lugar</Text>
        )}
        {!isFetching && !hasItems && !hasSearched && (
          <Text>Faca uma pesquisa!</Text>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.flights.isFetching,
  hasSearched: state.flights.hasSearched,
  hasItems: state.flights.outbound.lenght || state.flights.inbound.lenght
});

export default connect(mapStateToProps)(Body);

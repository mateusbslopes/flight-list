import React from "react";
import { connect } from "react-redux";
import style from "./style";
import {
  closeSearch as closeSearchAction,
  toggleAirline as toggleAirlineAction
} from "../../../actions";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";

class LateralFilter extends React.Component {
  render() {
    const {
      airlines,
      toggleAirline,
      displayedFlights,
      search,
      closeSearch
    } = this.props;

    if (!search.isOpen) return null;

    return (
      <div css={style}>
        <div className="header">
          <div className="title">
            <Text color="white">Filtre seus resultados por</Text>
          </div>
          <div onClick={closeSearch}>
            <Icon
              name="icon-max-navigation-close"
              size="big"
              color="rgb(26,188,156)"
            />
          </div>
        </div>

        <div className="body">
          <Text>Selecione a companhia aeria:</Text>
          {airlines.map(airline => (
            <div key={airline.label} className="airline">
              {/* TODO transform in atom/molecule */}
              <div
                className="airline-checkbox"
                onClick={() => toggleAirline(airline.label)}
              >
                {airline.checked && (
                  <Icon
                    name="icon-check"
                    color="rgb(26,188,156)"
                    size="small"
                  />
                )}
              </div>
              <div className="airline-label">{`${airline.label} (${airline[displayedFlights]} VOOS)`}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  airlines: state.airlines,
  displayedFlights: state.flights.displayed,
  search: state.search
});

const mapDispatchToProps = {
  toggleAirline: airlineLabel => toggleAirlineAction(airlineLabel),
  closeSearch: () => closeSearchAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(LateralFilter);

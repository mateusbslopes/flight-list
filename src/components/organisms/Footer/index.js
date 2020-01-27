import React from "react";
import { connect } from "react-redux";
import style from "./style";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import { toggleAirline as toggleAirlineAction } from "../../../actions";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpen: false
    };

    this.openFilter = this.openFilter.bind(this);
    this.closeFilter = this.closeFilter.bind(this);
  }

  openFilter() {
    this.setState({ isFilterOpen: true });
  }

  closeFilter() {
    this.setState({ isFilterOpen: false });
  }

  render() {
    return (
      <div css={style}>
        <div className="action action-first" onClick={this.openFilter}>
          <Text>FILTRAR VOOS</Text>
        </div>
        {this.state.isFilterOpen && (
          <div className="filter">
            <div className="header">
              <div className="title">
                <Text color="white">Filtre seus resultados por</Text>
              </div>
              <div onClick={this.closeFilter}>
                <Icon
                  name="icon-max-navigation-close"
                  size="big"
                  color="rgb(26,188,156)"
                />
              </div>
            </div>

            <div className="body">
              <Text>Selecione a companhia aeria:</Text>
              {this.props.airlines.map(airline => (
                <div key={airline.label} className="airline">
                  {/* TODO transform in atom/molecule */}
                  <div
                    className="airline-checkbox"
                    onClick={() => this.props.toggleAirline(airline.label)}
                  >
                    {airline.checked && (
                      <Icon
                        name="icon-check"
                        color="rgb(26,188,156)"
                        size="small"
                      />
                    )}
                  </div>
                  <div className="airline-label">{`${airline.label} (${
                    airline[this.props.displayedFlights]
                  } VOOS)`}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  airlines: state.airlines,
  displayedFlights: state.flights.displayed
});

const mapDispatchToProps = {
  toggleAirline: airlineLabel => toggleAirlineAction(airlineLabel)
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

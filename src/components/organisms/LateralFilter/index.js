import React from "react";
import { connect } from "react-redux";
import style from "./style";
import {
  closeFilter as closeFilterAction,
  toggleAirline as toggleAirlineAction
} from "../../../actions";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Checkbox from "../../atoms/Checkbox";

class LateralFilter extends React.Component {
  render() {
    const { airlines, toggleAirline, filter, closeFilter } = this.props;

    if (!filter.isOpen) return null;

    return (
      <div css={style}>
        <div className="header">
          <div className="title">
            <Text color="white">Filtre seus resultados por</Text>
          </div>
          <div onClick={closeFilter}>
            <Icon
              name="icon-max-navigation-close"
              size="big"
              color="rgb(26,188,156)"
            />
          </div>
        </div>

        <div className="body">
          <Text>Selecione a companhia aeria:</Text>
          {console.log(airlines)}
          {airlines.map(airline => (
            <Checkbox
              key={airline.label}
              id={airline.label}
              label={airline.label}
              toggle={toggleAirline}
              checked={airline.checked}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  airlines: state.airlines,
  filter: state.filter
});

const mapDispatchToProps = {
  toggleAirline: airlineLabel => toggleAirlineAction(airlineLabel),
  closeFilter: () => closeFilterAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(LateralFilter);

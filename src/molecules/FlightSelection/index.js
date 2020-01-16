import React from "react";
import SelectAutocomplete from "../SelectAutocomplete";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import style from "./style";
import Card from "../Card";

class FlightSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsSectionIsOpen: false
    };

    // TODO see how to close flight list
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({ fieldsSectionIsOpen: true });
  }

  componentDidMount() {
    this.setState(this.state);
  }

  getDisplayableValue(from, to) {
    if (!from) {
      if (!to) {
        return "Selecione";
      }
      return "Sel. Origem";
    }
    if (to) {
      return `${from.airportCode} - ${to.airportCode}`;
    }
    return "Sel. Dest";
  }

  render() {
    return (
      <div
        css={style}
        onMouseEnter={this.handleOnMouseEnter}
        onBlur={this.handleOnMouseLeave}
      >
        <div className="mobile-display">
          <Icon
            name="communication-location"
            size="big"
            color="rgb(26, 188, 156)"
          />
          <Text>
            {this.getDisplayableValue(this.props.from, this.props.to)}
          </Text>
        </div>
        {this.state.fieldsSectionIsOpen && (
          <div className="col-sm-16 fields-section">
            <div className="col-sm-8">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="origem"
                label="Sair de"
                value={this.props.from}
                onChange={this.props.handleFromChange}
              />
              {this.props.getDisplayableError(this.props.errors, "from")}
            </div>
            <div className="col-sm-8">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="destino"
                label="Ir para"
                value={this.props.to}
                onChange={this.props.handleToChange}
              />
              {this.props.getDisplayableError(this.props.errors, "to")}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FlightSelection;

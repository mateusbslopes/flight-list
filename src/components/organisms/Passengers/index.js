import React from "react";
import Icon from "../../atoms/Icon";
import style from "./style";
import Spinner from "../../atoms/Spinner";

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsIsVisible: true };
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount() {
    this.setState(this.state);
  }

  onTouchEnd() {
    this.setState({ optionsIsVisible: true });
  }

  handleOnBlur() {
    this.setState({ optionsIsVisible: false });
  }

  getDisplayValue(adults, children, infants) {
    if (!children && !infants)
      return adults > 1 ? `${adults} adultos` : `${adults} adulto`;
    return `${adults + children + infants} passageiros`;
  }

  render() {
    return (
      <div onTouchEnd={this.onTouchEnd} onBlur={this.handleOnBlur} css={style}>
        {this.state.optionsIsVisible && (
          <div className="options col-sm-6">
            <div className="options-item">
              <Spinner
                label="Adultos"
                value={this.props.adults}
                onChange={this.props.onChangeAdults}
                min={1}
              />
            </div>
            <div className="options-item">
              <Spinner
                label="Criancas"
                value={this.props.children}
                onChange={this.props.onChangeChildren}
              />
            </div>
            <div className="options-item">
              <Spinner
                label="Bebe"
                value={this.props.infants}
                onChange={this.props.onChangeInfants}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Passengers;

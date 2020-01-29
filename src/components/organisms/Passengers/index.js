import React from "react";
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
    const {
      adults,
      onChangeAdults,
      children,
      onChangeChildren,
      infants,
      onChangeInfants
    } = this.props;

    return (
      <div onTouchEnd={this.onTouchEnd} onBlur={this.handleOnBlur} css={style}>
        {this.state.optionsIsVisible && (
          <div className="options col-sm-6">
            <div className="options-item">
              <Spinner
                label="Adultos"
                value={adults}
                onChange={onChangeAdults}
                min={1}
              />
            </div>
            <div className="options-item">
              <Spinner
                label="Criancas"
                value={children}
                onChange={onChangeChildren}
              />
            </div>
            <div className="options-item">
              <Spinner
                label="Bebe"
                value={infants}
                onChange={onChangeInfants}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Passengers;

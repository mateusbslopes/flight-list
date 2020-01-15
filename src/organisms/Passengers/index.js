import React from "react";
import Icon from "../../atoms/Icon";
import style from "./style";

class Passengers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsIsVisible: false };
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
        <div>
          {this.getDisplayValue(
            this.props.adults,
            this.props.children,
            this.props.infants
          )}
        </div>
        {this.state.optionsIsVisible && (
          <div className="options">
            <div className="options-item">
              Adulto
              <div>
                <Icon
                  size="small"
                  name="action-remove"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeAdults(this.props.adults - 1)
                  }
                />
                {this.props.adults}
                <Icon
                  size="small"
                  name="action-add"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeAdults(this.props.adults + 1)
                  }
                />
              </div>
            </div>
            <div className="options-item">
              Crianca
              <div>
                <Icon
                  size="small"
                  name="action-remove"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeChildren(this.props.children - 1)
                  }
                />
                {this.props.children}
                <Icon
                  size="small"
                  name="action-add"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeChildren(this.props.children + 1)
                  }
                />
              </div>
            </div>
            <div className="options-item">
              Bebe
              <div>
                <Icon
                  size="small"
                  name="action-remove"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeInfants(this.props.infants - 1)
                  }
                />
                {this.props.infants}
                <Icon
                  size="small"
                  name="action-add"
                  color="rgb(26, 188, 156)"
                  onClick={() =>
                    this.props.onChangeInfants(this.props.infants + 1)
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Passengers;

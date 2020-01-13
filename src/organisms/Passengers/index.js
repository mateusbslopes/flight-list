import React from "react";
import Icon from "../../atoms/Icon";

class Passengers extends React.Component {
  render() {
    return (
      <div>
        <div>01 adultos classe economica</div>
        <div>
          <div>
            Adulto
            <Icon
              size="small"
              name="action-remove"
              color="rgb(26, 188, 156)"
              onClick={() => this.props.onChangeAdults(this.props.adults - 1)}
            />
            {this.props.adults}
            <Icon
              size="small"
              name="action-add"
              color="rgb(26, 188, 156)"
              onClick={() => this.props.onChangeAdults(this.props.adults + 1)}
            />
          </div>
          <div>
            Crianca
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
        <div>
          Bebe
          <Icon
            size="small"
            name="action-remove"
            color="rgb(26, 188, 156)"
            onClick={() => this.props.onChangeInfants(this.props.infants - 1)}
          />
          {this.props.infants}
          <Icon
            size="small"
            name="action-add"
            color="rgb(26, 188, 156)"
            onClick={() => this.props.onChangeInfants(this.props.infants + 1)}
          />
        </div>
      </div>
    );
  }
}

export default Passengers;

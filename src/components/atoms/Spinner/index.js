import React from "react";
import Icon from "../Icon";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      min: props.min || 0,
      max: props.max || 9,
      onChange: props.onChange
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState(this.state);
  }

  handleChange(value) {
    if (value < this.state.min || value > this.state.max) return;
    this.state.onChange(value);
  }

  render() {
    return (
      <div className="options-item">
        {this.props.label}
        <div className="options-item-config">
          <Icon
            size="big"
            name="icon-max-action-remove"
            color="rgb(26, 188, 156)"
            onClick={() => this.handleChange(this.props.value - 1)}
          />
          {this.props.value}
          <Icon
            size="big"
            name="icon-max-action-add"
            color="rgb(26, 188, 156)"
            onClick={() => this.handleChange(this.props.value + 1)}
          />
        </div>
      </div>
    );
  }
}

export default Spinner;

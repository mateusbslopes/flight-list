import React from "react";
import Icon from "../Icon";
import Text from "../Text";

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
    const { label, value } = this.props;

    return (
      <div className="options-item">
        <Text weight="light" size="medium-small">
          {label}
        </Text>
        <div className="options-item-config">
          <Icon
            size="big"
            name="icon-max-action-remove"
            color="rgb(26, 188, 156)"
            onClick={() => this.handleChange(this.props.value - 1)}
          />
          <Text>{value}</Text>
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

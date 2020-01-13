import React from "react";

class ExtraInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onChange: props.onChange, value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    this.setState(this.state);
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  handleBlur() {
    this.state.onChange(this.state.value);
  }

  render() {
    return (
      <div>
        Selecione a companhia aeria:
        {this.props.airlines.map(airline => (
          <input type="checkbox" name={airline.label} checked />
        ))}
      </div>
    );
  }
}

export default ExtraInfo;

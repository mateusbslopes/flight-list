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
        Digite a companhia aerea:{" "}
        <input
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

export default ExtraInfo;

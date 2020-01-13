import React from "react";
import String from "../../Utils/String";
import style from "./style";

class SelectAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isListOpen: false,
      selectedItem: null,
      // Using Finite State machine concept. see more at https://github.com/jakesgordon/javascript-state-machine
      state: "empty",
      value: null,
      label: props.label,
      placeholder: props.placeholder,
      onChange: props.onChange
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.getDisplayableRow = this.getDisplayableRow.bind(this);
  }

  handleChange(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  handleFocus() {
    this.setState({ isListOpen: true, state: "searching" });
  }

  handleBlur() {
    let state = this.state.value ? "fulfilled" : "empty";
    this.setState({ isListOpen: false, state });
  }

  filterData([label, airportCode]) {
    if (!this.state.search) return [];

    let search = String.prepareToCompare(this.state.search);
    return (
      String.prepareToCompare(label).search(search) >= 0 ||
      String.prepareToCompare(airportCode).search(search) >= 0
    );
  }

  selectItem(label, airportCode) {
    this.setState({ value: { label, airportCode }, state: "fulfilled" });
    this.state.onChange(airportCode);
  }

  handleOnMouseDown(evnt) {
    // Prevent blur on input to happen, allowing to click on list-item to be triggered
    evnt.preventDefault();
  }

  getDisplayableRow([label, airportCode, country]) {
    return (
      <div
        className="list-item"
        key={airportCode}
        onClick={() => this.selectItem(label, airportCode)}
        onMouseDown={this.handleOnMouseDown}
      >
        {`${airportCode} ${label}, ${country}`}{" "}
      </div>
    );
  }

  getDisplayedValue() {
    switch (this.state.state) {
      case "searching":
        return this.state.search;
      case "empty":
        return this.state.placeholder;
      case "fulfilled":
        return this.state.value.label;
    }
  }

  getDataToDisplay(data) {
    return data.filter(this.filterData).map(this.getDisplayableRow);
  }

  render() {
    return (
      <div css={style}>
        {/* TODO Label should be on state? */}
        {this.state.label}
        <input
          type="text"
          value={`${this.getDisplayedValue()}`}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {this.state.state === "searching" && (
          <div className="list">{this.getDataToDisplay(this.props.data)}</div>
        )}
      </div>
    );
  }
}

export default SelectAutocomplete;

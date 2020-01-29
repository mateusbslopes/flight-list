import React from "react";
import String from "../../../Utils/String";
import Text from "../../atoms/Text";
import style from "./style";

class SelectAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isListOpen: false,
      selectedItem: null,
      // Using Finite State machine concept. see more at https://github.com/jakesgordon/javascript-state-machine
      state: this.isEmpty(props.value) ? "empty" : "fulfilled",
      label: props.label,
      placeholder: props.placeholder,
      onChange: props.onChange
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.getDisplayableRow = this.getDisplayableRow.bind(this);
  }

  isEmpty(value) {
    return Object.entries(value).length === 0;
  }

  handleChange(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  handleClick() {
    this.setState({ isListOpen: true, state: "searching" });
  }

  handleBlur(value) {
    let state = this.isEmpty(value) ? "empty" : "fulfilled";
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

  selectItem(evt, label, airportCode) {
    this.setState({ state: "fulfilled" });
    this.state.onChange({ label, airportCode });
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
        onClick={evt => this.selectItem(evt, label, airportCode)}
        onMouseDown={this.handleOnMouseDown}
      >
        {`${airportCode} ${label}, ${country}`}{" "}
      </div>
    );
  }

  getDisplayedValue(value) {
    switch (this.state.state) {
      case "searching":
        return this.state.search;
      case "empty":
        return this.state.placeholder;
      case "fulfilled":
        return value.label;
    }
  }

  getDataToDisplay(data) {
    return data.filter(this.filterData).map(this.getDisplayableRow);
  }

  render() {
    const { value, data } = this.props;
    return (
      <div css={style}>
        <div
          className="autocomplete-content"
          onBlur={() => this.handleBlur(value)}
        >
          <Text size="medium-small" weight="light">
            {this.state.label}
          </Text>
          <div className="autocomplete-config">
            <div className="autocomplete-value col-sm-16">
              <input
                className="input-value col-sm-8"
                type="text"
                value={`${this.getDisplayedValue(value)}`}
                onChange={this.handleChange}
                onClick={this.handleClick}
              />
              <div className="autocomplete-value-desc">
                <div>
                  {this.state.state === "fulfilled" && (
                    <Text>{value.airportCode}</Text>
                  )}
                </div>
              </div>
            </div>
            {this.state.state === "searching" && (
              <div className="col-sm-8 list">
                <Text>{this.getDataToDisplay(data)}</Text>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectAutocomplete;

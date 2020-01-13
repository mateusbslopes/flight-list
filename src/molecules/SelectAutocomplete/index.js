import React from "react";
import String from "../../Utils/String";
import style from "./style";

class SelectAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isListOpen: false,
      selectedItem: null
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  handleChange(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  handleFocus() {
    this.setState({ isListOpen: true });
  }

  handleBlur() {
    this.setState({ isListOpen: false });
  }

  filterData([label, airportCode, country]) {
    if (!this.state.search) return [];

    let search = String.prepareToCompare(this.state.search);
    return (
      String.prepareToCompare(label).search(search) >= 0 ||
      String.prepareToCompare(airportCode).search(search) >= 0
    );
  }

  getDisplayableRow([label, airportCode, country]) {
    return (
      <div className="list-item" key={airportCode}>
        {`${airportCode} ${label}, ${country}`}{" "}
      </div>
    );
  }

  // TODO tranform to run like: data.filter(filterData).map(getDisplayableRow)
  getDataToDisplay(data) {
    return data.filter(this.filterData).map(this.getDisplayableRow);
  }

  render() {
    return (
      <div css={style}>
        Sair de
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {this.state.isListOpen && (
          <div className="list">{this.getDataToDisplay(this.props.data)}</div>
        )}
      </div>
    );
  }
}

export default SelectAutocomplete;

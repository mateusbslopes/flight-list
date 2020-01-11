import React from "react";
import String from "../../Utils/String";

class SelectAutocomplete extends React.Component {
  constructor(props) {
    const data = [
      {
        id: 1,
        value: "BH",
        value2: "Belo Horizonte"
      },
      {
        id: 2,
        value: "CA",
        value2: "Campinas"
      },
      {
        id: 3,
        value: "SB",
        value2: "Sabará"
      },
      {
        id: 4,
        value: "FT",
        value2: "Fortaleza"
      },
      {
        id: 5,
        value: "CG",
        value2: "Campo Grande"
      }
    ];

    super(props);
    this.state = { search: "", isListOpen: false, data, filteredData: data };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  search(filter) {
    filter = String.prepareToCompare(filter);
    return this.state.data.filter(
      d =>
        String.prepareToCompare(d.value).search(filter) >= 0 ||
        String.prepareToCompare(d.value2).search(filter) >= 0
    );
  }

  handleChange(evt) {
    this.setState({
      filteredData: this.search(evt.target.value),
      search: evt.target.value
    });
  }

  handleFocus() {
    this.setState({ isListOpen: true });
  }

  handleBlur() {
    this.setState({ isListOpen: false });
  }

  render() {
    return (
      <div>
        Sair de
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {this.state.isListOpen && (
          <div>
            {this.state.filteredData.map(d => (
              <div>{`${d.value} - ${d.value2} `} </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SelectAutocomplete;

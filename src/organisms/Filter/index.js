import React from "react";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSearch: props.onSearch,
      outboundDate: "2020-08-22",
      inboundDate: "2020-08-26",
      adults: 0,
      children: 0,
      infants: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.handleInfantsChange = this.handleInfantsChange.bind(this);
  }

  handleChange(event, field) {
    let obj = {};
    obj[field] = event.target.value;
    this.setState(obj);
  }

  // TODO centralize state management
  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to });
  }

  handleAdultsChange(adults) {
    this.setState({ adults });
  }

  handleChildrenChange(children) {
    this.setState({ children });
  }

  handleInfantsChange(infants) {
    this.setState({ infants });
  }

  componentDidMount() {
    this.setState(this.state);
  }

  render() {
    return (
      <form>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SelectAutocomplete
            data={this.props.airports}
            placeholder="origem"
            label="Sair de"
            onChange={this.handleFromChange}
          />
          <SelectAutocomplete
            data={this.props.airports}
            placeholder="destino"
            label="Ir para"
            onChange={this.handleToChange}
          />
          <div>
            Ida
            <input
              type="text"
              value={this.state.outboundDate}
              onChange={event => this.handleChange(event, "outboundDate")}
            />
          </div>
          <div>
            Volta
            <input
              type="text"
              value={this.state.inboundDate}
              onChange={event => this.handleChange(event, "inboundDate")}
            />
          </div>
          <Passengers
            adults={this.state.adults}
            onChangeAdults={this.handleAdultsChange}
            children={this.state.children}
            onChangeChildren={this.handleChildrenChange}
            infants={this.state.infants}
            onChangeInfants={this.handleInfantsChange}
          />
          <Button
            backgroundColor={"rgb(26, 188, 156)"}
            onClick={() => this.state.onSearch(this.state)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon name="action-search" size={"small"} color={"white"} />
              <Text color={"white"}>Pesquisar</Text>
            </div>
          </Button>
        </div>
      </form>
    );
  }
}

export default Filter;

import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outboundDate: "2020-08-22",
      inboundDate: "2020-08-26",
      adults: 0,
      children: 0,
      infants: 0,
      onSearch: props.onSearch
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text>Teste Frontend</Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                name="finance-coin"
                size={"big"}
                color={"rgb(26, 188, 156)"}
              />
              <Text>Venda suas milhas</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                name="communication-question"
                size={"big"}
                color={"rgb(26, 188, 156)"}
              />
              <Text>Tire suas duvidas</Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon
                name="action-user"
                size={"big"}
                color={"rgb(26, 188, 156)"}
              />
              <Text>Login ou cadastro</Text>
            </div>
          </div>
        </div>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div>
            <Button
              onClick={() => this.props.onChangeDisplayedFlights("outbound")}
            >
              Selecione seu voo de ida
            </Button>
          </div>
          <div>
            <Button
              onClick={() => this.props.onChangeDisplayedFlights("inbound")}
            >
              Selecione seu voo de volta
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

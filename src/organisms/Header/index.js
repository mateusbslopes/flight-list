import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      outboundDate: "",
      inboundDate: "",
      adults: "",
      children: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    let obj = {};
    obj[field] = event.target.value;
    this.setState(obj);
  }

  handleSubmit() {
    console.log(this.state);
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
            <div>
              Sair de
              <input
                type="text"
                value={this.state.from}
                onChange={event => this.handleChange(event, "from")}
              />
            </div>
            <div>
              Ir para
              <input
                type="text"
                value={this.state.to}
                onChange={event => this.handleChange(event, "to")}
              />
            </div>
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
            <div>
              Adultos
              <input
                type="text"
                value={this.state.adults}
                onChange={event => this.handleChange(event, "adults")}
              />
            </div>
            <div>
              Criancas
              <input
                type="text"
                value={this.state.children}
                onChange={event => this.handleChange(event, "children")}
              />
            </div>
            <Button
              backgroundColor={"rgb(26, 188, 156)"}
              onClick={this.handleSubmit}
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
      </div>
    );
  }
}

export default Header;

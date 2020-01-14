import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import Filter from "../Filter";

class Header extends React.Component {
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
        <Filter onSearch={this.props.onSearch} />
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

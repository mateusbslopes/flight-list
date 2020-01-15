import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import Filter from "../Filter";
import style from "./style";

class Header extends React.Component {
  render() {
    return (
      <div className="row" css={style}>
        <div className="title row">
          <Icon name="navigation-menu" size="big" color="rgb(26, 188, 156)" />
          <Text size="big">Teste Front</Text>
          <div className="links">
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
              <Text weight="light">Venda suas milhas</Text>
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
              <Text weight="light">Tire suas duvidas</Text>
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
              <Text weight="light">Login ou cadastro</Text>
            </div>
          </div>
        </div>
        <Filter
          onSearch={this.props.onSearch}
          airports={this.props.airports}
          errors={this.props.filterErrors}
        />
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
              <Text size="big">Selecione seu voo de ida</Text>
            </Button>
          </div>
          <div>
            <Button
              onClick={() => this.props.onChangeDisplayedFlights("inbound")}
            >
              <Text size="big">Selecione seu voo de volta</Text>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

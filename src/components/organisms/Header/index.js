import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import Filter from "../Filter";
import style from "./style";

class Header extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className="header-content">
          <div className="title row">
            <Icon
              name="icon-max-navigation-menu"
              size="big"
              color="rgb(26, 188, 156)"
            />
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
                  size="big"
                  color="rgb(26, 188, 156)"
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
                  size="big"
                  color="rgb(26, 188, 156)"
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
                <Icon name="action-user" size="big" color="rgb(26, 188, 156)" />
                <Text weight="light">Login ou cadastro</Text>
              </div>
            </div>
          </div>
          <Filter
            onSearch={this.props.onSearch}
            airports={this.props.airports}
            errors={this.props.filterErrors}
          />
          <div className="row header-navigation">
            <div
              className={
                "header-navigation-item col-sm-8 header-navigation-item-first" +
                (this.props.displayedFlights == "outbound"
                  ? " header-navigation-item-selected"
                  : "")
              }
            >
              <Button
                onClick={() => this.props.onChangeDisplayedFlights("outbound")}
              >
                <Text>Selecione sua ida</Text>
              </Button>
            </div>
            <div
              className={
                "header-navigation-item col-sm-8" +
                (this.props.displayedFlights == "inbound"
                  ? " header-navigation-item-selected"
                  : "")
              }
            >
              <Button
                onClick={() => this.props.onChangeDisplayedFlights("inbound")}
              >
                <Text>Selecione sua volta</Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
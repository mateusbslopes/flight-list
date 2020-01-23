import React from "react";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import Filter from "../Filter";
import style from "./style";
import { connect } from "react-redux";
import {
  setDisplayedFlights as setDisplayedFlightsAction,
  DisplayableFlights
} from "../../../actions";

class Header extends React.Component {
  render() {
    const { setDisplayedFlights } = this.props;
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
          <Filter />
          <div className="row header-navigation">
            <div
              className={
                "header-navigation-item col-sm-8 header-navigation-item-first" +
                (this.props.displayed == DisplayableFlights.OUTBOUND
                  ? " header-navigation-item-selected"
                  : "")
              }
            >
              <Button
                onClick={() => setDisplayedFlights(DisplayableFlights.OUTBOUND)}
              >
                <Text>Selecione sua ida</Text>
              </Button>
            </div>
            <div
              className={
                "header-navigation-item col-sm-8" +
                (this.props.displayed == DisplayableFlights.INBOUND
                  ? " header-navigation-item-selected"
                  : "")
              }
            >
              <Button
                onClick={() => setDisplayedFlights(DisplayableFlights.INBOUND)}
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

const mapStateToProps = state => ({
  displayed: state.flights.displayed
});

const mapDispachToProps = {
  setDisplayedFlights: displayed => setDisplayedFlightsAction(displayed)
};

export default connect(mapStateToProps, mapDispachToProps)(Header);

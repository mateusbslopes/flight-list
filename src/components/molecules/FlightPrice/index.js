import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";

const l10nBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

class FlightPrice extends React.Component {
  //When flight os exclive on maxmilhas
  getExclusiveFlight(pricing) {
    return (
      <div css={style}>
        <Button
          backgroundColor="rgb(26, 188, 156)"
          borderBottomColor="2px solid rgb(77,164,139)"
        >
          <div className="flight-price-content">
            <Text color="white">
              {pricing.ota
                ? l10nBRL.format(pricing.ota.saleTotal)
                : l10nBRL.format(pricing.miles.saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info">
          <Text weight="light">Voo exclusivo na MaxMilhas</Text>
        </div>
      </div>
    );
  }

  // When the best price is at airline
  getBestPriceAtAirline(pricing) {
    return (
      <div css={style}>
        <Button
          backgroundColor="rgb(26, 188, 156)"
          borderBottomColor="2px solid rgb(77,164,139)"
        >
          <div className="flight-price-content">
            <Text color="white">
              {l10nBRL.format(pricing.airline.saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info">
          <Text weight="light">Menor preco na Companhia</Text>
        </div>
      </div>
    );
  }
  // Sometimes the dicount will be rounded to 0 so do not show the percent is better
  getDiscount(price) {
    let discount = Math.trunc(price);
    if (discount == 0) return "";
    else return `${discount}%`;
  }

  getBestPriceAtMaxmilhas(pricing) {
    return (
      <div css={style}>
        <div className="extra-info">
          <Text weight="light">{pricing.airlineName.toUpperCase()}</Text>
          <div className="line-through">
            <Text>{l10nBRL.format(pricing.airline.saleTotal)}</Text>
          </div>
        </div>
        <Button
          backgroundColor="rgb(26, 188, 156)"
          borderBottomColor="2px solid rgb(77,164,139)"
        >
          <div className="flight-price-content">
            <Text color="white">
              {pricing.bestPriceAt == "ota"
                ? l10nBRL.format(pricing.ota.saleTotal)
                : l10nBRL.format(pricing.miles.saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info warning">
          <Text color="orange">
            Economize {this.getDiscount(pricing.savingPercentage)} na MaxMilhas!
          </Text>
        </div>
      </div>
    );
  }

  // Get content to be displayed
  getDisplayablePrice(pricing) {
    return pricing.airline == null
      ? this.getExclusiveFlight(pricing)
      : pricing.bestPriceAt === "airline"
      ? this.getBestPriceAtAirline(pricing)
      : this.getBestPriceAtMaxmilhas(pricing);
  }

  render() {
    return this.getDisplayablePrice(this.props.pricing);
  }
}

export default FlightPrice;

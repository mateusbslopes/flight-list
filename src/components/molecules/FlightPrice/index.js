import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";

//TODO Create a CurrencyComponent
const l10nBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

export default function FlightPrice({ pricing }) {
  //When flight os exclive on maxmilhas
  function getExclusiveFlight(pricing) {
    return (
      <div css={style}>
        <Button border={{ botton: "2px solid rgb(77,164,139)" }}>
          <div className="flight-price-content">
            <Text color={"ternary"}>
              {l10nBRL.format(pricing[pricing.bestPriceAt].saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info">
          <Text weight={500}>exclusiveFlight</Text>
        </div>
      </div>
    );
  }

  // When the best price is at airline
  function getBestPriceAtAirline(pricing) {
    return (
      <div css={style}>
        <Button border={{ botton: "2px solid rgb(77,164,139)" }}>
          <div className="flight-price-content">
            <Text color="ternary">
              {l10nBRL.format(pricing.airline.saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info">
          <Text weight={500}>lowestPriceCompany</Text>
        </div>
      </div>
    );
  }
  // Sometimes the dicount will be rounded to 0 so do not show the percent is better
  function getDiscount(price) {
    let discount = Math.trunc(price);
    if (discount == 0) return "";
    else return `${discount}%`;
  }

  function getBestPriceAtMaxmilhas(pricing) {
    return (
      <div css={style}>
        <div className="extra-info">
          <Text weight={500}>{pricing.airlineName.toUpperCase()}</Text>
          <div className="line-through">
            <Text>{l10nBRL.format(pricing.airline.saleTotal)}</Text>
          </div>
        </div>
        <Button border={{ botton: "2px solid rgb(77,164,139)" }}>
          <div className="flight-price-content">
            <Text color="ternary">
              {l10nBRL.format(pricing[pricing.bestPriceAt].saleTotal)}
            </Text>
          </div>
        </Button>
        <div className="extra-info warning">
          <Text color="alert">
            Economize {getDiscount(pricing.savingPercentage)} na MaxMilhas!
          </Text>
        </div>
      </div>
    );
  }

  // Get content to be displayed
  function getDisplayablePrice(pricing) {
    return pricing.airline == null
      ? getExclusiveFlight(pricing)
      : pricing.bestPriceAt === "airline"
      ? getBestPriceAtAirline(pricing)
      : getBestPriceAtMaxmilhas(pricing);
  }
  return getDisplayablePrice(pricing);
}

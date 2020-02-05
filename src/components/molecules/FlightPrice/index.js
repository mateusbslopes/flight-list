import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";
import { FormattedMessage } from "react-intl";

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
          <FormattedMessage id="exclusiveFlight" />
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
          <FormattedMessage id="lowestPriceCompany" />
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
          <p>{pricing.airlineName.toUpperCase()}</p>
          <div className="line-through">
            {l10nBRL.format(pricing.airline.saleTotal)}
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
          <FormattedMessage
            id="lowestPriceMaxMilhas"
            color="alert"
            values={{ percentage: getDiscount(pricing.savingPercentage) }}
          />
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

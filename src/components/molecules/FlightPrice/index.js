import React from "react";
import { FormattedMessage } from "react-intl";
import Button from "../../atoms/Button";
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
        <Button>
          <div className="flight-price-content">
            {l10nBRL.format(pricing[pricing.bestPriceAt].saleTotal)}
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
        <Button>
          <div className="flight-price-content">
            {l10nBRL.format(pricing.airline.saleTotal)}
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
        <Button>
          <div className="flight-price-content">
            {l10nBRL.format(pricing[pricing.bestPriceAt].saleTotal)}
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

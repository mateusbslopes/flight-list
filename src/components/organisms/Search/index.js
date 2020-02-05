import React, { useState, useEffect } from "react";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import style from "./style";
import Calendar from "../../molecules/Calendar";
import { connect } from "react-redux";
import {
  getFlights as getFlightsAction,
  openSearch as openSearchAction,
  closeSearch as closeSearchAction,
  setField as setFieldAction
} from "../../../actions";
import RadioList from "../../molecules/RadioList";
import { FormattedMessage } from "react-intl";

function Search({
  closeSearch,
  openSearch,
  airports,
  errors,
  search,
  getFlights,
  setField
}) {
  const [outboundDate, setOutboundDate] = useState(search.outboundDate);
  const [inboundDate, setInboundDate] = useState(search.inboundDate);
  const [from, setFrom] = useState(search.from);
  const [to, setTo] = useState(search.to);
  const [adults, setAdults] = useState(search.adults);
  const [children, setChildren] = useState(search.children);
  const [infants, setInfants] = useState(search.infants);
  const [cabin, setCabin] = useState(search.cabin);
  const [warningIsVisible, setWarningIsVisible] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  let cancelTimeout = () => {};

  useEffect(() => {
    setField("from");
  }, [from]);

  useEffect(() => {
    setField("to");
  }, [to]);

  const brazilianMonth = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ"
  ];

  function displayWarningMessage(message) {
    cancelTimeout();
    setWarningMessage(message);
    setWarningIsVisible(true);
    cancelTimeout = setTimeout(() => {
      setWarningIsVisible(false);
    }, 3000);
  }

  function onChangeAdults(value) {
    if (value < 1) displayWarningMessage("adultsMinWarning");
    else if (value + children + infants > 9)
      displayWarningMessage("maxPassengersWarning");
    else setAdults(value);
  }

  function onChangeChildren(value) {
    if (value + adults + infants > 9)
      displayWarningMessage("maxPassengersWarning");
    else if (value >= 0) setChildren(value);
  }

  function onChangeInfants(value) {
    if (value + children + adults > 9)
      displayWarningMessage("maxPassengersWarning");
    else if (value > adults) displayWarningMessage("infantsMaxWarning");
    else if (value >= 0) setInfants(value);
  }

  const cabins = [
    { value: "EC", label: "economic" },
    { value: "EX", label: "executive" }
  ];

  function getFieldError(errors = [], fieldName) {
    let error = errors.find(error => error.path === fieldName);
    return error ? error.message : null;
  }

  function getDisplayableError(errors = [], fieldName) {
    let messageError = getFieldError(errors, fieldName);
    return messageError ? <div className="error">{messageError}</div> : false;
  }

  function getDisplayableDate(dateToDisplay) {
    if (dateToDisplay.length != 10) return "-";

    const [year, month, day] = dateToDisplay.split("-");
    let date = new Date(year, month - 1, day);
    if (!isNaN(date.getTime())) {
      return (
        <div className="filter-date">
          <div className="filter-date-day">
            <strong>{date.getDate()}</strong>
          </div>
          <div className="filter-date-day">
            <p weight={500}>{brazilianMonth[date.getMonth()]}</p>
          </div>
          <p weight={500}>{date.getFullYear()}</p>
        </div>
      );
    } else {
      return "-";
    }
  }

  function getPassengersAmount(adults, children, infants) {
    return adults + children + infants;
  }

  return (
    <section css={theme => style(theme)}>
      <section className="filter-value">
        <div className="filter-locations">
          <Icon size={400} name="icon-max-communication-location" />
          <div className="filter-locations-value">
            {from && from.airportCode}-{to && to.airportCode}
          </div>
        </div>
        <div className="filter-date">
          <Icon size={400} name="icon-max-action-calendar" />
          {getDisplayableDate(outboundDate)}
        </div>
        <div className="filter-date">
          <Icon size={400} name="icon-max-action-calendar" />
          {getDisplayableDate(inboundDate)}
        </div>
        <div className="filter-passengers">
          <Icon name="icon-users" size={400} />
          {getPassengersAmount(adults, children, infants)}
        </div>
        <div className="filter-action">
          {search.isOpen && (
            <div onClick={closeSearch}>
              <Icon
                name="icon-max-communication-circle-close"
                color="ternary"
                size={400}
              />
            </div>
          )}
          {!search.isOpen && (
            <div onClick={openSearch}>
              <Icon name="icon-pencil" color="ternary" size={400} />
            </div>
          )}
        </div>
      </section>
      {search.isOpen && (
        <div className="filter-options">
          <div className="filter-option">
            <SelectAutocomplete
              data={airports}
              placeholder="fromPlaceholder"
              label="fromLabel"
              value={from}
              onChange={value => setFrom(value)}
            />
            {getDisplayableError(errors, "from")}
          </div>
          <div className="filter-option">
            <SelectAutocomplete
              data={airports}
              placeholder="toPlaceholder"
              label="toLabel"
              value={to}
              onChange={value => setTo(value)}
            />
            {getDisplayableError(errors, "to")}
          </div>
          <div className="flight-dates">
            <div className="filter-option col-sm-8">
              <Calendar
                label="outbound"
                value={outboundDate}
                handleChange={event => setOutboundDate(event.target.value)}
              />
              {getDisplayableError(errors, "outboundDate")}
            </div>
            <div className="filter-option col-sm-8">
              <Calendar
                label="inbound"
                value={inboundDate}
                handleChange={event => setInboundDate(event.target.value)}
              />
              {getDisplayableError(errors, "inboundDate")}
            </div>
          </div>

          <div className="row filter-option">
            <div className="col-sm-8 passengers">
              <Passengers
                adults={adults}
                onChangeAdults={onChangeAdults}
                children={children}
                onChangeChildren={onChangeChildren}
                infants={infants}
                onChangeInfants={onChangeInfants}
              />
              {warningIsVisible && (
                <div className="warning">
                  <FormattedMessage id={warningMessage} />
                </div>
              )}
            </div>
            <div className="col-sm-8">
              <RadioList
                label="cabin"
                data={cabins}
                value={cabin}
                onChange={cabin => setCabin(cabin)}
                valueKey="value"
                displayKey="label"
              />
            </div>
          </div>

          <div className="w-100"></div>
          <div className="row">
            <div>
              <Button
                background={{ color: "primary", strength: 500 }}
                onClick={() =>
                  getFlights(
                    {
                      ...search,
                      outboundDate,
                      inboundDate,
                      from,
                      to,
                      adults,
                      children,
                      infants,
                      cabin
                    },
                    search
                  )
                }
              >
                <div className="search-buttom-content">
                  <>
                    <Icon name="icon-max-action-search" color="ternary" />
                    <p>
                      <FormattedMessage id="search" />
                    </p>
                  </>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const mapStateToProps = state => ({
  search: state.search,
  errors: state.search.errors,
  airports: state.airports
});

const mapDispatchToProps = {
  getFlights: (search, lastSearch) => getFlightsAction(search, lastSearch),
  openSearch: () => openSearchAction(),
  closeSearch: () => closeSearchAction(),
  setField: fieldName => setFieldAction(fieldName)
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

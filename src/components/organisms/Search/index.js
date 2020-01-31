import React, { useState, useEffect } from "react";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";
import Text from "../../atoms/Text";
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
            <Text>{date.getDate()}</Text>
          </div>
          <div className="filter-date-day">
            <Text weight={500}>{brazilianMonth[date.getMonth()]}</Text>
          </div>
          <Text weight={500}>{date.getFullYear()}</Text>
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
    <div css={theme => style(theme)}>
      <div className="filter-value">
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
      </div>
      {search.isOpen && (
        <div className="filter-options">
          <div className="filter-option">
            <SelectAutocomplete
              data={airports}
              placeholder="Origem"
              label="Sair de"
              value={from}
              onChange={value => setFrom(value)}
            />
            {getDisplayableError(errors, "from")}
          </div>
          <div className="filter-option">
            <SelectAutocomplete
              data={airports}
              placeholder="Destino"
              label="Ir para"
              value={to}
              onChange={value => setTo(value)}
            />
            {getDisplayableError(errors, "to")}
          </div>
          <div className="flight-dates">
            <div className="filter-option col-sm-8">
              <Calendar
                label="Ida"
                value={outboundDate}
                handleChange={event => setOutboundDate(event.target.value)}
              />
              {getDisplayableError(errors, "outboundDate")}
            </div>
            <div className="filter-option col-sm-8">
              <Calendar
                label="Volta"
                value={inboundDate}
                handleChange={event => setInboundDate(event.target.value)}
              />
              {getDisplayableError(errors, "inboundDate")}
            </div>
          </div>

          <div className="filter-option">
            <Passengers
              adults={adults}
              onChangeAdults={setAdults}
              children={children}
              onChangeChildren={setChildren}
              infants={infants}
              onChangeInfants={setInfants}
            />
            {getDisplayableError(errors, "adults")}
            {getDisplayableError(errors, "children")}
            {getDisplayableError(errors, "infants")}
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
                      infants
                    },
                    search
                  )
                }
              >
                <div className="search-buttom-content">
                  <Icon name="icon-max-action-search" color="ternary" />
                  <Text color="ternary">Pesquisar</Text>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
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

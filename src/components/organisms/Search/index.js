import React, { useState } from "react";
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
  closeSearch as closeSearchAction
} from "../../../actions";

function Search({
  closeSearch,
  openSearch,
  airports,
  errors,
  search,
  getFlights
}) {
  const [outboundDate, setOutboundDate] = useState(search.outboundDate);
  const [inboundDate, setInboundDate] = useState(search.inboundDate);
  const [from, setFrom] = useState(search.from);
  const [to, setTo] = useState(search.to);
  const [adults, setAdults] = useState(search.adults);
  const [children, setChildren] = useState(search.children);
  const [infants, setInfants] = useState(search.infants);

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
            <Text weight="light">{brazilianMonth[date.getMonth()]}</Text>
          </div>
          <Text weight="light">{date.getFullYear()}</Text>
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
    <div css={style}>
      <div className="filter-value">
        <div className="filter-locations">
          <Icon
            size="medium"
            name="icon-max-communication-location"
            color="rgb(26, 188, 156)"
          />
          <div className="filter-locations-value">
            {from && from.airportCode}-{to && to.airportCode}
          </div>
        </div>
        <div className="filter-date">
          <Icon
            color="rgb(26, 188, 156)"
            size="medium"
            name="icon-max-action-calendar"
          />
          {getDisplayableDate(outboundDate)}
        </div>
        <div className="filter-date">
          <Icon
            color="rgb(26, 188, 156)"
            size="medium"
            name="icon-max-action-calendar"
          />
          {getDisplayableDate(inboundDate)}
        </div>
        <div className="filter-passengers">
          <Icon name="icon-users" color="rgb(26, 188, 156)" size="medium" />
          {getPassengersAmount(adults, children, infants)}
        </div>
        <div className="filter-action">
          {search.isOpen && (
            <div onClick={closeSearch}>
              <Icon
                name="icon-max-communication-circle-close"
                color="white"
                size="medium"
              />
            </div>
          )}
          {!search.isOpen && (
            <div onClick={openSearch}>
              <Icon name="icon-pencil" color="white" size="medium" />
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
                backgroundColor="rgb(26, 188, 156)"
                onClick={() =>
                  getFlights({
                    outboundDate,
                    inboundDate,
                    from,
                    to,
                    adults,
                    children,
                    infants
                  })
                }
              >
                <div className="search-buttom-content">
                  <Icon
                    name="icon-max-action-search"
                    size="big"
                    color="white"
                  />
                  <Text color="white">Pesquisar</Text>
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
  getFlights: search => getFlightsAction(search),
  openSearch: () => openSearchAction(),
  closeSearch: () => closeSearchAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

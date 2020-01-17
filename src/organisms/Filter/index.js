import React from "react";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import style from "./style";
import Calendar from "../../molecules/Calendar";

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

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSearch: props.onSearch,
      outboundDate: "2020-08-22",
      inboundDate: "2020-08-26",
      from: {},
      to: {},
      adults: 1,
      children: 0,
      infants: 0,
      filterOptionIsOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleAdultsChange = this.handleAdultsChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.handleInfantsChange = this.handleInfantsChange.bind(this);
    this.getDisplayableError = this.getDisplayableError.bind(this);
    this.toggleFilterOption = this.toggleFilterOption.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.getOutboundDisplayableDate = this.getOutboundDisplayableDate.bind(
      this
    );
    this.getInboundDisplayableDate = this.getInboundDisplayableDate.bind(this);
  }

  onSearch() {
    this.state.onSearch(this.state);
    this.toggleFilterOption();
  }

  handleChange(event, field) {
    let obj = {};
    obj[field] = event.target.value;
    console.log(obj);
    this.setState(obj);
  }

  // TODO centralize state management
  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to });
  }

  handleAdultsChange(adults) {
    this.setState({ adults });
  }

  handleChildrenChange(children) {
    this.setState({ children });
  }

  handleInfantsChange(infants) {
    this.setState({ infants });
  }

  componentDidMount() {
    this.setState(this.state);
  }

  getFieldError(errors = [], fieldName) {
    let error = errors.find(error => error.path === fieldName);
    return error ? error.message : null;
  }

  getDisplayableError(errors = [], fieldName) {
    let messageError = this.getFieldError(errors, fieldName);
    return messageError ? <div className="error">{messageError}</div> : false;
  }

  toggleFilterOption() {
    this.setState({ filterOptionIsOpen: !this.state.filterOptionIsOpen });
  }

  getOutboundDisplayableDate() {
    let date = new Date(this.state.outboundDate);
    if (!isNaN(date.getTime()) && this.state.outboundDate.length == 10) {
      return (
        <div className="filter-date">
          <div className="filter-date-day">{date.getDate()}</div>
          {brazilianMonth[date.getMonth()]} {date.getFullYear()}
        </div>
      );
    } else {
      return "-";
    }
  }

  getInboundDisplayableDate() {
    let date = new Date(this.state.inboundDate);
    if (!isNaN(date.getTime()) && this.state.inboundDate.length == 10) {
      return (
        <div className="filter-date">
          <div className="filter-date-day">{date.getDate()}</div>
          {brazilianMonth[date.getMonth()]} {date.getFullYear()}
        </div>
      );
    } else {
      return "-";
    }
  }

  getPassengersAmount() {
    return this.state.adults + this.state.children + this.state.infants;
  }

  render() {
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
              {this.state.from && this.state.from.airportCode}-
              {this.state.to && this.state.to.airportCode}
            </div>
          </div>
          <div className="filter-date">
            <Icon
              color="rgb(26, 188, 156)"
              size="medium"
              name="icon-max-action-calendar"
            />
            {this.getOutboundDisplayableDate()}
          </div>
          <div className="filter-date">
            <Icon
              color="rgb(26, 188, 156)"
              size="medium"
              name="icon-max-action-calendar"
            />
            {this.getInboundDisplayableDate()}
          </div>
          <div className="filter-passengers">
            <Icon name="icon-users" color="rgb(26, 188, 156)" size="medium" />
            {this.getPassengersAmount()}
          </div>
          <div className="filter-action" onClick={this.toggleFilterOption}>
            {this.state.filterOptionIsOpen && (
              <Icon
                name="icon-max-communication-circle-close"
                color="white"
                size="medium"
              />
            )}
            {!this.state.filterOptionIsOpen && (
              <Icon name="icon-pencil" color="white" size="medium" />
            )}
          </div>
        </div>
        {this.state.filterOptionIsOpen && (
          <div className="filter-options">
            <div className="filter-option">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="Origem"
                label="Sair de"
                value={this.state.from}
                onChange={this.handleFromChange}
              />
              {this.getDisplayableError(this.props.errors, "from")}
            </div>
            <div className="filter-option">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="Destino"
                label="Ir para"
                value={this.state.to}
                onChange={this.handleToChange}
              />
              {this.getDisplayableError(this.props.errors, "to")}
            </div>
            <div className="flight-dates">
              <div className="filter-option col-sm-8">
                <Calendar
                  label="Ida"
                  value={this.state.outboundDate}
                  handleChange={event =>
                    this.handleChange(event, "outboundDate")
                  }
                />
                {this.getDisplayableError(this.props.errors, "outboundDate")}
              </div>
              <div className="filter-option col-sm-8">
                <Calendar
                  label="Volta"
                  value={this.state.inboundDate}
                  handleChange={event =>
                    this.handleChange(event, "inboundDate")
                  }
                />
                {this.getDisplayableError(this.props.errors, "inboundDate")}
              </div>
            </div>

            <div className="filter-option">
              <Passengers
                adults={this.state.adults}
                onChangeAdults={this.handleAdultsChange}
                children={this.state.children}
                onChangeChildren={this.handleChildrenChange}
                infants={this.state.infants}
                onChangeInfants={this.handleInfantsChange}
              />
              {this.getDisplayableError(this.props.errors, "adults")}
              {this.getDisplayableError(this.props.errors, "children")}
              {this.getDisplayableError(this.props.errors, "infants")}
            </div>
            <div className="w-100"></div>
            <div className="row">
              <div className="search-buttom">
                <Button
                  backgroundColor={"rgb(26, 188, 156)"}
                  onClick={this.onSearch}
                >
                  <div className="search-buttom-content">
                    <Icon
                      name="icon-max-action-search"
                      size={"big"}
                      color={"white"}
                    />
                    <Text color={"white"}>Pesquisar</Text>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Filter;

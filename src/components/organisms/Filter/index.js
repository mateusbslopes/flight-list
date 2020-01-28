import React from "react";
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
  openFilter as openFilterAction,
  closeFilter as closeFilterAction
} from "../../../actions";

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
      outboundDate: "2020-08-22",
      inboundDate: "2020-08-26",
      from: {},
      to: {},
      adults: 1,
      children: 0,
      infants: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDisplayableError = this.getDisplayableError.bind(this);
    this.getDisplayableDate = this.getDisplayableDate.bind(this);
  }

  handleChange(value, field) {
    this.setState({ [field]: value });
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

  getDisplayableDate(dateToDisplay) {
    let date = new Date(dateToDisplay);
    if (!isNaN(date.getTime()) && dateToDisplay.length == 10) {
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

  getPassengersAmount(adults, children, infants) {
    return adults + children + infants;
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
            {this.getDisplayableDate(this.state.outboundDate)}
          </div>
          <div className="filter-date">
            <Icon
              color="rgb(26, 188, 156)"
              size="medium"
              name="icon-max-action-calendar"
            />
            {this.getDisplayableDate(this.state.inboundDate)}
          </div>
          <div className="filter-passengers">
            <Icon name="icon-users" color="rgb(26, 188, 156)" size="medium" />
            {this.getPassengersAmount(
              this.state.adults,
              this.state.children,
              this.state.infants
            )}
          </div>
          <div className="filter-action">
            {this.props.filter.isOpen && (
              <div onClick={this.props.closeFilter}>
                <Icon
                  name="icon-max-communication-circle-close"
                  color="white"
                  size="medium"
                />
              </div>
            )}
            {!this.props.filter.isOpen && (
              <div onClick={this.props.openFilter}>
                <Icon name="icon-pencil" color="white" size="medium" />
              </div>
            )}
          </div>
        </div>
        {this.props.filter.isOpen && (
          <div className="filter-options">
            <div className="filter-option">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="Origem"
                label="Sair de"
                value={this.state.from}
                onChange={value => this.handleChange(value, "from")}
              />
              {this.getDisplayableError(this.props.errors, "from")}
            </div>
            <div className="filter-option">
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="Destino"
                label="Ir para"
                value={this.state.to}
                onChange={value => this.handleChange(value, "to")}
              />
              {this.getDisplayableError(this.props.errors, "to")}
            </div>
            <div className="flight-dates">
              <div className="filter-option col-sm-8">
                <Calendar
                  label="Ida"
                  value={this.state.outboundDate}
                  handleChange={event =>
                    this.handleChange(event.target.value, "outboundDate")
                  }
                />
                {this.getDisplayableError(this.props.errors, "outboundDate")}
              </div>
              <div className="filter-option col-sm-8">
                <Calendar
                  label="Volta"
                  value={this.state.inboundDate}
                  handleChange={event =>
                    this.handleChange(event.target.value, "inboundDate")
                  }
                />
                {this.getDisplayableError(this.props.errors, "inboundDate")}
              </div>
            </div>

            <div className="filter-option">
              <Passengers
                adults={this.state.adults}
                onChangeAdults={value => this.handleChange(value, "adults")}
                children={this.state.children}
                onChangeChildren={value => this.handleChange(value, "children")}
                infants={this.state.infants}
                onChangeInfants={value => this.handleChange(value, "infants")}
              />
              {this.getDisplayableError(this.state.errors, "adults")}
              {this.getDisplayableError(this.state.errors, "children")}
              {this.getDisplayableError(this.state.errors, "infants")}
            </div>
            <div className="w-100"></div>
            <div className="row">
              <div>
                <Button
                  backgroundColor="rgb(26, 188, 156)"
                  onClick={() => this.props.getFlights(this.state)}
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
}

const mapStateToProps = state => ({
  filter: state.filter,
  errors: state.filter.errors,
  airports: state.airports
});

const mapDispatchToProps = {
  getFlights: filter => getFlightsAction(filter),
  openFilter: () => openFilterAction(),
  closeFilter: () => closeFilterAction()
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

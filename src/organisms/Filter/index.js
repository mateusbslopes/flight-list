import React from "react";
import SelectAutocomplete from "../../molecules/SelectAutocomplete";
import Passengers from "../Passengers";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import style from "./style";
import Calendar from "../../molecules/Calendar";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSearch: props.onSearch,
      outboundDate: "2020-08-22",
      inboundDate: "2020-08-26",
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
  }

  onSearch() {
    this.state.onSearch(this.state);
    this.toggleFilterOption();
  }

  handleChange(event, field) {
    let obj = {};
    obj[field] = event.target.value;
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
            <div className="filter-locations-value">CNF-FLN</div>
          </div>
          <div className="filter-date">
            <Icon
              color="rgb(26, 188, 156)"
              size="medium"
              name="icon-max-action-calendar"
            />
            <div className="filter-date-day">08</div>
            NOV 2017
          </div>
          <div className="filter-date">
            <Icon
              color="rgb(26, 188, 156)"
              size="medium"
              name="icon-max-action-calendar"
            />
            <div className="filter-date-day">08</div>
            NOV 2017
          </div>
          <div className="filter-passengers">
            <div className="filter-date">
              <Icon
                color="rgb(26, 188, 156)"
                size="medium"
                name="icon-max-action-calendar"
              />
              <div className="filter-date-day">08</div>
              NOV 2017
            </div>
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
            {/* TODO Make a component (field w/ error) */}
            <div>
              <SelectAutocomplete
                data={this.props.airports}
                placeholder="Origem"
                label="Sair de"
                value={this.state.from}
                onChange={this.handleFromChange}
              />
              {this.getDisplayableError(this.props.errors, "from")}
            </div>
            <div>
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
              <div className="col-sm-8">
                <Calendar
                  label="Ida"
                  value={this.state.outboundDate}
                  handleChange={event =>
                    this.handleChange(event, "outboundDate")
                  }
                />
                {this.getDisplayableError(this.props.errors, "outboundDate")}
              </div>
              <div className="col-sm-8">
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

            <div className="row">
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
                  onClick={() =>
                    this.state.onSearch(this.state) && this.toggleFilterOption()
                  }
                >
                  <div className="search-buttom-content">
                    <Icon name="action-search" size={"big"} color={"white"} />
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

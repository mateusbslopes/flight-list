import React from "react";
import ReactDOM from "react-dom";
import FlightList from "./organisms/FlightList/index";
import Header from "./organisms/Header";
import FlightService from "./services/Flights";
import Text from "./atoms/Text";
import Body from "./organisms/Body";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flights: null, displayedFlights: "outbound" };
    this.onSearch = this.onSearch.bind(this);
    this.onChangeDisplayedFlights = this.onChangeDisplayedFlights.bind(this);
  }

  onSearch(filter) {
    FlightService.getFlights(filter).then(flights => {
      this.setState({ flights: flights.data });
    });
  }

  onChangeDisplayedFlights(flightsToDisplay) {
    if (!this.state.flights) return;
    if (!this.state.flights[flightsToDisplay])
      throw new Error(
        `there is no display flights w/ name ${flightsToDisplay}`
      );

    this.setState({ displayedFlights: flightsToDisplay });
  }

  getFlights(flights, flightsToDisplay) {
    return flights ? flights[flightsToDisplay] : [];
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          onChangeDisplayedFlights={this.onChangeDisplayedFlights}
        />
        <Body
          flights={this.getFlights(
            this.state.flights,
            this.state.displayedFlights
          )}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

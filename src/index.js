import React from "react";
import ReactDOM from "react-dom";
import FlightList from "./molecules/FlightList/index";

class App extends React.Component {
  render() {
    return <FlightList />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

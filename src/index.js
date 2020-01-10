import React from "react";
import ReactDOM from "react-dom";
import FlightRow from "./organisms/FlightRow/index";

class App extends React.Component {
  render() {
    return <FlightRow />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

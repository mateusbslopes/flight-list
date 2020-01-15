import React from "react";
import ReactDOM from "react-dom";
import Flights from "./Templates/Flights";

class App extends React.Component {
  render() {
    return <Flights />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

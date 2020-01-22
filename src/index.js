import React from "react";
import ReactDOM from "react-dom";
import Flights from "./components/templates/Flights";

class App extends React.Component {
  render() {
    return <Flights />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

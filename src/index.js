import React from "react";
import ReactDOM from "react-dom";
import FlightList from "./organisms/FlightList/index";
import Header from "./organisms/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FlightList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

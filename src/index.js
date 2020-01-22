import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Flights from "./components/templates/Flights";
import { Provider } from "react-redux";
import store from "./reducers";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Flights />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

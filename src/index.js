import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Flights from "./components/templates/Flights";
import { Provider } from "react-redux";
import store from "./reducers";

function App() {
  return (
    <Provider store={store}>
      <Flights />
    </Provider>
  );
}

export { store };
ReactDOM.render(<App />, document.querySelector("#root"));

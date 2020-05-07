import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";
import Flights from "./components/templates/Flights";
import store from "./reducers";

function App() {
  return (
    // TODO Switch theme imported when change the device
    // TODO Save style name used on storage to change that w/ a button
    <Provider store={store}>
      <Flights />
    </Provider>
  );
}

export { store };
ReactDOM.render(<App />, document.querySelector("#root"));

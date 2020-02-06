import "core-js";
import { ThemeProvider } from "emotion-theming";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";
import Flights from "./components/templates/Flights";
import store from "./reducers";
import theme from "./theme";

function App() {
  return (
    // TODO Switch theme imported when change the device
    // TODO Save style name used on storage to change that w/ a button
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Flights />
      </Provider>
    </ThemeProvider>
  );
}

export { store };
ReactDOM.render(<App />, document.querySelector("#root"));

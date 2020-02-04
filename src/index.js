import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Flights from "./components/templates/Flights";
import { Provider } from "react-redux";
import store from "./reducers";
import theme from "./theme";
import { ThemeProvider } from "emotion-theming";
import loadTranslations from "./translations";

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
loadTranslations().then(function() {
  ReactDOM.render(<App />, document.querySelector("#root"));
});

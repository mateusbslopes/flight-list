import "core-js";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Flights from "./components/templates/Flights";
import { Provider } from "react-redux";
import store from "./reducers";
import theme from "./theme";
import { ThemeProvider } from "emotion-theming";

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Flights />
      </Provider>
    </ThemeProvider>
  );
}

export { store };
ReactDOM.render(<App />, document.querySelector("#root"));

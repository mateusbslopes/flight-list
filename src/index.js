import React from "react";
import ReactDOM from "react-dom";
import Info from "./atoms/Info/index";

class App extends React.Component {
  render() {
    return <Info size={10}>Frango</Info>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

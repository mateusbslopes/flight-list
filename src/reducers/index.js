import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import airlines from "./airlines";
import airports from "./airports";
import filter from "./filter";
import flights from "./flights";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default createStore(
  combineReducers({ airlines, airports, filter, flights }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

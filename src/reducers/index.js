import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import airlines from "./airlines";
import airports from "./airports";
import filter from "./filter";
import flights from "./flights";

// Separate reduces from store

export default createStore(
  combineReducers({ airlines, airports, filter, flights }),
  applyMiddleware(thunkMiddleware)
);

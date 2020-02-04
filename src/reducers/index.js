import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import airlines from "./airlines";
import airports from "./airports";
import filter from "./filter";
import flights from "./flights";
import search from "./search";
import localization from "./localization";

let store;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

store = createStore(
  combineReducers({
    airlines,
    airports,
    filter,
    flights,
    search,
    localization
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

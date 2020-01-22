import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { ADD_FLIGHTS, SET_AIRPORTS, SET_DISPLAYED_FLIGHTS } from "../actions";

const initialState = {
  flights: null,
  airports: null,
  searchIntentionId: null,

  errors: {},
  displayedFlights: "outbound",
  filterableAirlines: null,
  filterOptionIsOpen: false,

  from: {},
  to: {},
  outboundDate: "2020-08-22",
  inboundDate: "2020-08-26",
  // Create increment action for each
  adults: 1,
  children: 0,
  infants: 0
};

function storage(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FLIGHTS:
      let flights = flights ? flights.concat(payload.flights) : payload.flights;
      return {
        ...state,
        flights: flights
      };
    case SET_AIRPORTS:
      return {
        ...state,
        airports: payload.airports
      };
    default:
      return state;
  }
}

export default createStore(storage, applyMiddleware(thunkMiddleware));

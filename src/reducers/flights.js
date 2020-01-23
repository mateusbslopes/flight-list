// TODO should be "ClearFlights" or "FILTER"

import {
  CLEAR_FLIGHTS,
  ADD_FLIGHTS,
  SET_DISPLAYED_FLIGHTS,
  START_FETCHING,
  END_FETCHING,
  DisplayableFlights
} from "../actions";

const initialState = {
  outbound: [],
  inbound: [],
  displayed: DisplayableFlights.OUTBOUND,
  isFetching: false,
  hasSearched: false
};

function addFlights(state, payload) {
  console.log(payload);
  let flights = { ...payload.flights };
  state.outbound = state.outbound.concat(flights.outbound);
  state.inbound = state.inbound.concat(flights.inbound);
  console.log("STATE", state);
  return { ...state };
}

export default function flights(state = initialState, { type, payload }) {
  switch (type) {
    case CLEAR_FLIGHTS:
      return initialState;
    case ADD_FLIGHTS:
      // Order by price
      return addFlights(state, payload);
    case SET_DISPLAYED_FLIGHTS:
      // TODO see if should make validation of DisplayableFlights
      return {
        ...state,
        displayed: payload.displayed
      };
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        hasSearched: true
      };
    case END_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

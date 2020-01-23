// TODO should be "ClearFlights" or "FILTER"

import { CLEAR_FLIGHTS, ADD_FLIGHTS } from "../actions";

const initialState = {
  outbound: [],
  inbound: []
};

function addFlights(state, payload) {
  let flights = { ...payload.flights };
  state.outbound.concat(flights.outbound);
  state.inbound.concat(flights.inbound);
  return { ...state };
}

export default function flights(state = initialState, { type, payload }) {
  switch (type) {
    case CLEAR_FLIGHTS:
      return initialState;
    case ADD_FLIGHTS:
      // Order by price
      return addFlights(state, payload);
    default:
      return state;
  }
}

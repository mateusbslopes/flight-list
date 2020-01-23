import { ADD_AIRLINES, CLEAR_AIRLINES } from "../actions";

function addAirlines(state, payload) {
  return state.slice().concat(payload.airline);
}

export default function airlines(state = [], { type, payload }) {
  switch (type) {
    case ADD_AIRLINES:
      return addAirlines(state, payload);
    case CLEAR_AIRLINES:
      return [];
    default:
      return state;
  }
}

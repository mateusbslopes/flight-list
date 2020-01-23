import { ADD_AIRLINE, CLEAR_AIRLINES } from "../actions";

function addAirline(state, payload) {
  return state.slice().concat(payload.airline);
}

export default function airlines(state = [], { type, payload }) {
  switch (type) {
    case ADD_AIRLINE:
      return addAirline(state, payload);
    case CLEAR_AIRLINES:
      return [];
    default:
      return state;
  }
}

import { ADD_AIRLINE, START_FETCHING, TOGGLE_AIRLINE } from "../actions";

function addAirline(state, payload) {
  return state.slice().concat(payload.airline);
}

function toggleAirline(state, payload) {
  let airlinesToReturn = state.slice();
  let indexToUpdate = state.findIndex(
    airline => airline.label === payload.airlineLabel
  );
  airlinesToReturn[indexToUpdate].checked = !airlinesToReturn[indexToUpdate]
    .checked;
  return airlinesToReturn;
}

export default function airlines(state = [], { type, payload }) {
  switch (type) {
    case ADD_AIRLINE:
      return addAirline(state, payload);
    case START_FETCHING:
      return [];
    case TOGGLE_AIRLINE:
      return toggleAirline(state, payload);
    default:
      return state;
  }
}

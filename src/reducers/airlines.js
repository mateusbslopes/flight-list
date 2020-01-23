import { SET_AIRLINES } from "../actions";

export default function airlines(state = null, { type, payload }) {
  switch (type) {
    case SET_AIRLINES:
      return payload.airlines;
    default:
      return state;
  }
}

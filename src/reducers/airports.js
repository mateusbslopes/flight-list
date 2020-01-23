import { SET_AIRPORTS } from "../actions";

export default function airports(storage = [], { type, payload }) {
  switch (type) {
    case SET_AIRPORTS:
      return payload.airports;
    default:
      return storage;
  }
}

import { OPEN_FILTER, CLOSE_FILTER } from "../actions";

const initialState = {
  isOpen: false
};

export default function filter(state = initialState, { type }) {
  switch (type) {
    case OPEN_FILTER:
      return { isOpen: true };
    case CLOSE_FILTER:
      return { isOpen: false };
    default:
      return state;
  }
}

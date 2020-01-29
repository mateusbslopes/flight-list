import { OPEN_SEARCH, CLOSE_SEARCH } from "../actions";

const initialState = {
  isOpen: false
};

export default function search(state = initialState, { type }) {
  switch (type) {
    case OPEN_SEARCH:
      return { ...state, isOpen: true };
    case CLOSE_SEARCH:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

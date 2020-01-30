import {
  SET_SEARCH,
  SEARCH_ERROR,
  OPEN_SEARCH,
  CLOSE_SEARCH
} from "../actions";

const initialState = {
  intentionId: null,
  isOpen: false,
  from: {},
  to: {},
  outboundDate: "2020-08-22",
  inboundDate: "2020-08-26",
  adults: 1,
  children: 0,
  infants: 0,
  errors: []
};

const searchError = (state, errors) => {
  return {
    ...state,
    errors: errors.map(err => {
      err.path = err.path.split(".")[0];
      return err;
    })
  };
};

export default function search(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCH:
      return { ...state, ...payload.search, errors: [] };
    case OPEN_SEARCH:
      return { ...state, isOpen: true };
    case CLOSE_SEARCH:
      return { ...state, isOpen: false };
    case SEARCH_ERROR:
      return searchError(state, payload.errors);
    default:
      return state;
  }
}

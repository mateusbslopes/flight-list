import { SET_FILTER, FILTER_ERROR } from "../actions";

const initialState = {
  intentionId: null,
  from: {},
  to: {},
  outboundDate: "2020-08-22",
  inboundDate: "2020-08-26",
  // Create increment action for each
  adults: 1,
  children: 0,
  infants: 0,
  errors: []
};

const filterError = (state, errors) => {
  return {
    ...state,
    errors: errors.map(err => {
      err.path = err.path.split(".")[0];
      return err;
    })
  };
};

export default function filter(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return { ...payload.filter };
    case FILTER_ERROR:
      return filterError(state, payload.errors);
    default:
      return state;
  }
}

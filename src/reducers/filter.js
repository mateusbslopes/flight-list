import { SET_FILTER } from "../actions";

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

export default function filter(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FILTER:
      return payload.filter;
    default:
      return state;
  }
}

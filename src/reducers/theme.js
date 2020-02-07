import { SET_THEME } from "../actions";

const defaultState = {
  name: "dark"
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_THEME:
      return { ...state, name: payload.theme };
    default:
      return state;
  }
}

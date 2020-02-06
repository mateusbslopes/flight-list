import { SET_LOCALE } from "../actions";

const defaultState = {
  locale: "pt-BR"
};

export default function(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_LOCALE:
      return { ...state, locale: payload.locale };
    default:
      return state;
  }
}

import {
  ADD_TO_OUTBOUND_HOUR,
  CLOSE_FILTER,
  OPEN_FILTER,
  TOGGLE_OUTBOUND_HOUR
} from "../actions";

const initialState = {
  isOpen: false,
  outboundHour: {
    morning: {
      checked: true,
      outbound: null,
      inbound: null
    },
    afternoon: {
      checked: true,
      outbound: null,
      inbound: null
    },
    night: {
      checked: true,
      outbound: null,
      inbound: null
    },
    dawn: {
      checked: true,
      outbound: null,
      inbound: null
    }
  }
};

function toggleOutboundHour(state, payload) {
  let newOutboundHour = state.outboundHour;
  newOutboundHour[payload.time].checked = !newOutboundHour[payload.time]
    .checked;
  return { ...state, newOutboundHour };
}

export default function filter(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_FILTER:
      console.log("teste");
      return { ...state, isOpen: true };
    case CLOSE_FILTER:
      return { ...state, isOpen: false };
    case "CLEAR_FILTER":
      return initialState;
    case ADD_TO_OUTBOUND_HOUR:
    case TOGGLE_OUTBOUND_HOUR:
      return toggleOutboundHour(state, payload);
    default:
      return state;
  }
}

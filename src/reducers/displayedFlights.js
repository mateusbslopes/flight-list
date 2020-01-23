import { SET_DISPLAYED_FLIGHTS, DisplayableFlights } from "../actions";

export default function displayedFlights(
  state = DisplayableFlights.OUTBOUND,
  { type, payload }
) {
  switch (type) {
    case SET_DISPLAYED_FLIGHTS:
      // TODO see if should make validation of DisplayableFlights
      return payload.displayedFlights;
    default:
      return state;
  }
}

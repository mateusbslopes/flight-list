import { fetchAirports } from "../api/airports";
// Action types
export const ADD_FLIGHTS = "ADD_FLIGHTS";
export const SET_AIRPORTS = "SET_AIRPORTS";
export const SET_DISPLAYED_FLIGHTS = "SET_DISPLAYED_FLIGHTS";
export const GET_AIRPORTS = "GET_AIRPORTS";
export const GET_AIRPORTS_SUCCESS = "GET_AIRPORTS_SUCCESS";

// Project conts
export const DisplayableFlights = {
  INBOUND: "inbound",
  OUTBOUND: "outbound"
};

// Actions
export const getAirports = () => async dispach => {
  dispach({ type: GET_AIRPORTS });
  let response = await fetchAirports();
  dispach(airportsSuccess(response.data));
  return response.data;
};

export const airportsSuccess = airports => ({
  type: GET_AIRPORTS_SUCCESS,
  payload: { airports }
});

export const setAirports = airports => ({
  type: SET_AIRPORTS,
  payload: { airports }
});

export const addFlights = flights => ({
  type: ADD_FLIGHTS,
  payload: { flights }
});

import { fetchAirports } from "../api/airports";
import {
  makeSearchIntention,
  getFlights as requestFlights
} from "../api/flights";

// Action types
export const SET_AIRLINES = "SET_AIRLINES";
export const SET_AIRPORTS = "SET_AIRPORTS";
export const SET_DISPLAYED_FLIGHTS = "SET_DISPLAYED_FLIGHTS";
export const SET_FILTER = "SET_FILTER";
export const START_FETCHING = "START_FETCHING";
export const END_FETCHING = "END_FETCHING";
export const GET_AIRPORTS = "GET_AIRPORTS";
export const ADD_AIRLINE = "ADD_AIRLINE";
export const CLEAR_AIRLINES = "CLEAR_AIRLINES";
export const CLEAR_FLIGHTS = "CLEAR_AIRLINES";
export const ADD_FLIGHTS = "ADD_FLIGHTS";
export const TOGGLE_AIRLINE = "TOGGLE_AIRLINE";

// Project conts
export const DisplayableFlights = {
  INBOUND: "inbound",
  OUTBOUND: "outbound"
};

// Actions
export const setAirlines = airlines => ({
  type: SET_AIRLINES,
  payload: { airlines }
});

export const setAirports = airports => ({
  type: SET_AIRPORTS,
  payload: { airports }
});

export const setDisplayedFlights = displayed => ({
  type: SET_DISPLAYED_FLIGHTS,
  payload: { displayed }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

export const getAirports = () => async dispach => {
  dispach({ type: GET_AIRPORTS });
  let response = await fetchAirports();
  dispach(setAirports(Object.values(response.data.airports)));
  return response.data;
};

export const getFlights = filter => async dispach => {
  dispach({ type: START_FETCHING });
  makeSearchIntention(filter).then(response => {
    let promises = [];
    response.data.airlines.forEach(airline => {
      promises.push(
        requestFlights(response.data.id, airline.label).then(
          response => {
            dispach(addFlights(response.data));
            dispach(addAirline(airline, response.data));
          },
          err => {
            // 404 should not be displayed
          }
        )
      );
    });
    Promise.allSettled(promises).then(() => {
      dispach({ type: END_FETCHING });
    });
  });
};

export const addFlights = flights => ({
  type: ADD_FLIGHTS,
  payload: { flights }
});

export const addAirline = (airline, flights) => ({
  type: ADD_AIRLINE,
  payload: {
    airline: {
      ...airline,
      checked: true,
      inbound: flights.inbound.length,
      outbound: flights.outbound.length
    }
  }
});

export const toggleAirline = airlineLabel => ({
  type: TOGGLE_AIRLINE,
  payload: { airlineLabel }
});

import { fetchAirports } from "../api/airports";
import {
  makeSearchIntention,
  getFlights as requestFlights
} from "../api/flights";

import * as yup from "yup";

// Action types
export const SET_AIRLINES = "SET_AIRLINES";
export const CLEAR_AIRLINES = "CLEAR_AIRLINES";
export const ADD_AIRLINE = "ADD_AIRLINE";
export const TOGGLE_AIRLINE = "TOGGLE_AIRLINE";

export const SET_AIRPORTS = "SET_AIRPORTS";
export const GET_AIRPORTS = "GET_AIRPORTS";

export const SET_DISPLAYED_FLIGHTS = "SET_DISPLAYED_FLIGHTS";

export const START_FETCHING = "START_FETCHING";
export const END_FETCHING = "END_FETCHING";

export const CLEAR_FLIGHTS = "CLEAR_AIRLINES";
export const ADD_FLIGHTS = "ADD_FLIGHTS";

export const OPEN_FILTER = "OPEN_FILTER";
export const CLOSE_FILTER = "CLOSE_FILTER";

export const SET_SEARCH = "SET_SEARCH";
export const OPEN_SEARCH = "OPEN_SEARCH";
export const CLOSE_SEARCH = "CLOSE_SEARCH";
export const SEARCH_ERROR = "SEARCH_ERROR";

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

export const setAirports = airports => ({
  type: SET_AIRPORTS,
  payload: { airports }
});

export const getAirports = () => async dispach => {
  dispach({ type: GET_AIRPORTS });
  let response = await fetchAirports();
  dispach(setAirports(Object.values(response.data.airports)));
  return response.data;
};

export const setDisplayedFlights = displayed => ({
  type: SET_DISPLAYED_FLIGHTS,
  payload: { displayed }
});

export const addFlights = flights => ({
  type: ADD_FLIGHTS,
  payload: { flights }
});

export const openFilter = () => ({
  type: OPEN_FILTER
});

export const closeFilter = () => ({
  type: CLOSE_FILTER
});

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: search
});

export const openSearch = () => ({
  type: OPEN_SEARCH
});

export const closeSearch = () => ({
  type: CLOSE_SEARCH
});

yup.setLocale({
  mixed: {
    default: "Nao eh valido",
    required: "O campo eh obrigatorio"
  }
});

const searchSchema = yup.object().shape({
  from: yup.object().shape({
    airportCode: yup.string().required()
  }),
  to: yup.object().shape({
    airportCode: yup.string().required()
  }),
  outboundDate: yup
    .date()
    .min(new Date())
    .required(),
  inboundDate: yup
    .date()
    .min(new Date())
    .required(),
  adults: yup
    .number()
    .min(1)
    .max(9),
  children: yup
    .number()
    .min(0)
    .max(9),
  infants: yup
    .number()
    .min(0)
    .max(9)
});

const schemaOptions = {
  abortEarly: false
};

export const getFlights = search => async dispach => {
  try {
    searchSchema.validateSync(searchSchema.cast(search), schemaOptions);
    makeSearchIntention(search).then(response => {
      dispach({ type: START_FETCHING });
      dispach(closeSearch());
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
  } catch (validationErr) {
    dispach({
      type: SEARCH_ERROR,
      payload: {
        errors: validationErr.inner
      }
    });
  }
};

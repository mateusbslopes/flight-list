import * as yup from "yup";
import { fetchAirports } from "../api/airports";
import {
  getFlights as requestFlights,
  makeSearchIntention
} from "../api/flights";
import { store } from "../index";

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
export const TOGGLE_OUTBOUND_HOUR = "TOGGLE_OUTBOUND_HOUR";
export const ADD_TO_OUTBOUND_HOUR = "ADD_TO_OUTBOUND_HOUR";

export const SET_SEARCH = "SET_SEARCH";
export const OPEN_SEARCH = "OPEN_SEARCH";
export const CLOSE_SEARCH = "CLOSE_SEARCH";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SET_FIELD = "SET_FIELD";

export const SET_LOCALE = "SET_LOCALE";

export const SET_THEME = "SET_THEME";

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

export const addFlights = (flights, intentionId, lastIntentionId) => ({
  type: ADD_FLIGHTS,
  payload: { flights, intentionId, lastIntentionId }
});

export const openFilter = () => {
  console.log("teste");
  return {
    type: OPEN_FILTER
  };
};

export const closeFilter = () => ({
  type: CLOSE_FILTER
});

export const toggleOutboundHour = time => ({
  type: TOGGLE_OUTBOUND_HOUR,
  payload: { time }
});

export const addOutboundHour = (time, flights) => ({
  type: TOGGLE_OUTBOUND_HOUR,
  payload: { time, flights }
});

export const setSearch = search => ({
  type: SET_SEARCH,
  payload: { search }
});

export const openSearch = () => ({
  type: OPEN_SEARCH
});

export const closeSearch = () => ({
  type: CLOSE_SEARCH
});

export const setField = fieldName => ({
  type: SET_FIELD,
  payload: { fieldName }
});

export const setLocale = locale => ({
  type: SET_LOCALE,
  payload: { locale }
});

export const setTheme = theme => ({
  type: SET_THEME,
  payload: { theme }
});

//TODO translate message errors
yup.setLocale({
  mixed: {
    default: "invalidField",
    required: "requiredField"
  },
  string: {
    matches: "invalidDate"
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
    .string()
    .required()
    .matches(/\d{4}-[01]\d-[0-3]\d/),
  inboundDate: yup
    .string()
    .required()
    .matches(/\d{4}-[01]\d-[0-3]\d/),
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

export const getFlights = (search, currentSearch) => async dispach => {
  if (
    JSON.stringify(search) === JSON.stringify(currentSearch) &&
    store.getState().flights.hasSearched
  )
    return;

  try {
    searchSchema.validateSync(searchSchema.cast(search), schemaOptions);
    makeSearchIntention(search).then(response => {
      dispach(setSearch({ ...search, intentionId: response.data.id }));
      dispach({ type: START_FETCHING });
      dispach(closeSearch());

      let promises = [];
      response.data.airlines.forEach(airline => {
        promises.push(
          requestFlights(response.data.id, airline.label).then(
            flights => {
              if (response.data.id !== store.getState().search.intentionId)
                return;
              dispach(addFlights(flights.data, response.data.id));
              dispach(addAirline(airline, flights.data));
            },
            err => {
              // 404 should not be displayed
            }
          )
        );
      });
      Promise.allSettled(promises).then(() => {
        if (response.data.id !== store.getState().search.intentionId) return;
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

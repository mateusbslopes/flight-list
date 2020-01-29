import axios from "axios";

export function getFlights(id, airline) {
  const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";

  return axios.get(
    `${SEARCH_FLIGHTS_API}/search/${id}/flights?airline=${airline}`,
    {
      headers: {
        Authorization: `JWT ${process.env.API_TOKEN}`
      }
    }
  );
}

export function makeSearchIntention(filter) {
  const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";
  const postData = {
    tripType: "RT",
    from: filter.from.airportCode,
    to: filter.to.airportCode,
    outboundDate: filter.outboundDate,
    inboundDate: filter.inboundDate,
    cabin: "EC",
    adults: Number(filter.adults),
    children: Number(filter.children),
    infants: Number(filter.infants)
  };

  return axios.post(
    `${SEARCH_FLIGHTS_API}/search?time=${Date.now()}`,
    postData,
    {
      headers: {
        Authorization: `JWT ${process.env.API_TOKEN}`
      }
    }
  );
}

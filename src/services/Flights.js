import axios from "axios";

class Flights {
  static getAirports() {
    return axios.get(
      "https://gist.githubusercontent.com/maxmilhas/0b1ec09c950f2dbfc878591ec2a2d5b3/raw/bb34139e0438ac9d5fa583de2dc5153cf55a3746/airports.json"
    );
  }

  static makeSearchIntention(filter) {
    const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";
    const postData = {
      tripType: "RT",
      from: filter.from,
      to: filter.to,
      outboundDate: filter.outboundDate,
      inboundDate: filter.inboundDate,
      cabin: "EC", //classe econômica (EC) ou executiva (EX)
      adults: Number(filter.adults),
      children: Number(filter.children),
      infants: 0
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

  static getFlights(id, airline) {
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
}
export default Flights;

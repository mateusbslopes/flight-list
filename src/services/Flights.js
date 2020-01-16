import axios from "axios";
import * as yup from "yup";

const filterSchema = yup.object().shape({
  from: yup.string().required(),
  to: yup.string().required(),
  outboundDate: yup.string().required(),
  inboundDate: yup.string().required(),
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

class Flights {
  static getAirports() {
    return axios.get(
      "https://gist.githubusercontent.com/maxmilhas/0b1ec09c950f2dbfc878591ec2a2d5b3/raw/bb34139e0438ac9d5fa583de2dc5153cf55a3746/airports.json"
    );
  }

  static makeSearchIntention(filter) {
    filterSchema.validateSync(filterSchema.cast(filter), schemaOptions);

    const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";
    const postData = {
      tripType: "RT",
      from: filter.from.airportCode,
      to: filter.to.airportCode,
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

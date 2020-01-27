import axios from "axios";
import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "Nao eh valido",
    required: "O campo eh obrigatorio"
  }
});

const filterSchema = yup.object().shape({
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

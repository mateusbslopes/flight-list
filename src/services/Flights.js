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
      from: filter.from, //origem
      to: filter.to, //destino
      outboundDate: filter.outboundDate, //data de partida
      inboundDate: filter.inboundDate, //data de volta
      cabin: "EC", //classe econômica (EC) ou executiva (EX)
      adults: Number(filter.adults), //adultos
      children: Number(filter.children), //crianças
      infants: 0 //bebês
    };

    return axios.post(
      `${SEARCH_FLIGHTS_API}/search?time=${Date.now()}`,
      postData,
      {
        headers: {
          Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kLmNvbS5iciIsInN1YiI6InRlc3RlLWZyb250ZW5kIiwiZW52IjoiaG1nIn0.0oZUsoKp87qvB06DtaBmrQpBuDpig30eZCjQyIfvQT4`
        }
      }
    );
  }

  static getFlights(filter) {
    const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";

    return this.makeSearchIntention(filter).then(response => {
      return axios.get(
        `${SEARCH_FLIGHTS_API}/search/${response.data.id}/flights?airline=gol`,
        {
          headers: {
            Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYXhtaWxoYXMuY29tLmJyIiwiaWF0IjoxNTA5MTIwMTAxLCJleHAiOjE1MTA0MTYxMDEsImF1ZCI6InRlc3RlLWZyb250ZW5kLmNvbS5iciIsInN1YiI6InRlc3RlLWZyb250ZW5kIiwiZW52IjoiaG1nIn0.0oZUsoKp87qvB06DtaBmrQpBuDpig30eZCjQyIfvQT4`
          }
        }
      );
    });
  }
}
export default Flights;

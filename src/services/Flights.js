import axios from "axios";

class Flights {
  static getAirports() {
    return axios.get(
      "https://gist.githubusercontent.com/maxmilhas/0b1ec09c950f2dbfc878591ec2a2d5b3/raw/bb34139e0438ac9d5fa583de2dc5153cf55a3746/airports.json"
    );
  }

  static makeSearchIntention() {
    const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";
    const postData = {
      tripType: "RT",
      from: "REC", //origem
      to: "RIO", //destino
      outboundDate: "2020-08-22", //data de partida
      inboundDate: "2020-08-28", //data de volta
      cabin: "EC", //classe econômica (EC) ou executiva (EX)
      adults: 1, //adultos
      children: 0, //crianças
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

  static getFlights() {
    const SEARCH_FLIGHTS_API = "https://flight-price-hmg.maxmilhas.com.br";

    return this.makeSearchIntention().then(response => {
      console.log(response);
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

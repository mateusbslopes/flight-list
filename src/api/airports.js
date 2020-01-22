export function fetchAirports() {
  return axios.get(
    // TODO use env params
    "https://gist.githubusercontent.com/maxmilhas/0b1ec09c950f2dbfc878591ec2a2d5b3/raw/bb34139e0438ac9d5fa583de2dc5153cf55a3746/airports.json"
  );
}

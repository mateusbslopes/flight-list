import FlightsService from "../services/Flights";

class Flights {
  static getAirports() {
    return FlightsService.getAirports();
  }
}

export default Flights;

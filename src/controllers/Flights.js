import FlightsService from "../services/Flights";

class Flights {
  static getAirports() {
    return FlightsService.getAirports();
  }

  static getFlights(filter, addFlights) {
    FlightsService.makeSearchIntention(filter).then(response => {
      let promises = [];
      response.data.airlines.forEach(airline => {
        promises.push(
          FlightsService.getFlights(response.data.id, airline.label).then(
            response => {
              addFlights(response.data);
            },
            err => {
              console.log(err);
            }
          )
        );
      });
      Promise.allSettled(promises);
    });
  }
}

export default Flights;

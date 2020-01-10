class Flights {
  constructor() {
    this.flights = {
      id: "59f38e0e592d9a06ccda8bfe",
      createdDate: "2017-10-27T19:50:37.604Z",
      legacyId: "48490545",
      isInternational: false,
      isMercosul: true,
      airlines: [
        {
          label: "latam",
          timeout: 60,
          status: {
            enable: true,
            message: ""
          }
        },
        {
          label: "gol",
          timeout: 60,
          status: {
            enable: true,
            message: ""
          }
        },
        {
          label: "azul",
          timeout: 60,
          status: {
            enable: true,
            message: ""
          }
        },
        {
          label: "avianca",
          timeout: 60,
          status: {
            enable: true,
            message: ""
          }
        }
      ]
    };
  }

  getFlights() {
    return Promise.resolve(this.flights);
  }
}

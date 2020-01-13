import React from "react";

class ExtraInfo extends React.Component {
  handleChange(airline, airlines, setAirlines) {
    let newAirlines = [...airlines];
    let indexOfElement = newAirlines.findIndex(a => a.label == airline.label);
    newAirlines[indexOfElement].checked = !airline.checked;
    setAirlines(newAirlines);
  }

  render() {
    return (
      <div>
        Selecione a companhia aeria:
        {this.props.airlines.map(airline => (
          <div key={airline.label}>
            <input
              type="checkbox"
              name={airline.label}
              checked={airline.checked}
              onChange={() =>
                this.handleChange(
                  airline,
                  this.props.airlines,
                  this.props.setAirlines
                )
              }
            />
            {`${airline.label} (${airline[this.props.displayedFlights]} VOOS)`}
          </div>
        ))}
      </div>
    );
  }
}

export default ExtraInfo;

import React from "react";
import Card from "../../molecules/Card";
import Text from "../../atoms/Text";
import style from "./style";

class ExtraInfo extends React.Component {
  handleChange(airline, airlines, setAirlines) {
    let newAirlines = [...airlines];
    let indexOfElement = newAirlines.findIndex(a => a.label == airline.label);
    newAirlines[indexOfElement].checked = !airline.checked;
    setAirlines(newAirlines);
  }

  render() {
    return (
      <div css={style}>
        <div className="priceAlert">
          <Card
            header={<Text color="white">Alerta de preco</Text>}
            body={
              <Text>
                <b>Crie um alerta de preco de ORIGEM para DESTINO. </b>Quando o
                voo estiver no preco cadastrado, enviaremos um alerta para seu
                e-mail e voce economiza ainda mais.
              </Text>
            }
          />
        </div>
        <Card
          header={<Text color="white">Filtre seus resultados por</Text>}
          body={
            <div>
              Selecione a companhia aeria:
              {this.props.airlines.map(airline => (
                <div key={airline.label}>
                  {/* TODO transform in atom/molecule */}
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
                  {`${airline.label} (${
                    airline[this.props.displayedFlights]
                  } VOOS)`}
                </div>
              ))}
            </div>
          }
        />
      </div>
    );
  }
}

export default ExtraInfo;

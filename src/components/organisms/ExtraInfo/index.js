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
              <div>
                <Text size="small">
                  Crie um alerta de preco de ORIGEM para DESTINO.
                </Text>
                <Text size="small" weight="light">
                  Quando o voo estiver no preco cadastrado, enviaremos um alerta
                  para seu e-mail e voce economiza ainda mais.
                </Text>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default ExtraInfo;

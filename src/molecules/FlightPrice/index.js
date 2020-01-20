import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import style from "./style";

class FlightPrice extends React.Component {
  render() {
    return (
      <div css={style}>
        <Button
          backgroundColor={"rgb(26, 188, 156)"}
          borderBottomColor="2px solid rgb(77,164,139)"
        >
          <div className="flight-price-content">
            <Text color="white">R$ 276,40</Text>
          </div>
        </Button>
      </div>
    );
  }
}

export default FlightPrice;

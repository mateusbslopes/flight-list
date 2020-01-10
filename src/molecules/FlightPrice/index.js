import React from "react";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

class FlightPrice extends React.Component {
  render() {
    return (
      <div>
        <Button backgroundColor={"rgb(26, 188, 156)"}>
          <Text color="white">R$ 276,40</Text>
        </Button>
      </div>
    );
  }
}

export default FlightPrice;

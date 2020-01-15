const style = (size = "normal", weight = "normal", color = "normal") => {
  const getColor = () => {
    switch (color) {
      case "light":
      case "normal":
        return "rgb(135, 147, 149)";
      case "black":
        return "black";
      case "white":
        return "white";
      case "green":
        return "rgb(26, 188, 156);";
      default:
        throw new Error(`Invalid color ${color} given to component Text`);
    }
  };

  const getWeight = weight => {
    switch (weight) {
      case "light":
        return 500;
      case "normal":
        return 600;
    }
  };

  const getFontSize = size => {
    switch (size) {
      case "small":
        return "10px";
      case "normal":
        return "30px";
      case "big":
        return "60px";
    }
  };

  return `
        justify-content: center;
        font-family: Montserrat, arial, sans-serif;
        color: ${getColor()};
        font-weight: ${getWeight(weight)};
        font-size: ${getFontSize(size)};
    `;
};

export default style;

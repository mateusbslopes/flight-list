const style = (size = 12, weight = "normal", color = "normal") => {
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

  return `
        justify-content: center;
        font-family: Montserrat, arial, sans-serif;
        color: ${getColor()};
        font-weight: ${getWeight(weight)};
        font-size: ${size};
    `;
};

export default style;

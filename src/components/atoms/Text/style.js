import { getNested } from "../../../utils/ObjectUtils";

const style = (theme, size = "medium", weight = "normal", color = "normal") => {
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
      case "orange":
        return "rgb(230, 173, 59)";
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
      case "medium-small":
        return "25px";
      case "medium":
        return "30px";
      case "big":
        return "60px";
    }
  };

  return `
        justify-content: center;
        font-family: Montserrat, arial, sans-serif;
        color: ${getNested(theme.colors, color, 500) ||
          theme.colors.secundary[500]};
        font-weight: ${theme.weights[weight] || theme.weights[600]};
        font-size: ${theme.sizes[size] || theme.sizes[400]};
    `;
};

export default style;

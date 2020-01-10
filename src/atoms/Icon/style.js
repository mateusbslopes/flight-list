// Size can be small (+ detalhes do voo) normal (calendar) or big (venda suas milhas)
const style = (color, size) => {
  let getIconSize = size => {
    switch (size) {
      case "small":
        return "15px";
      case "medium":
        return "black";
      case "big":
        return "30px";
      default:
        throw new Error(`Invalid size ${size} given to component Icon`);
    }
  };

  return `
    color: ${color};
    font-size: ${getIconSize(size)};
  `;
};

export default style;

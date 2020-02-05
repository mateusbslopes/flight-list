import { getNested } from "../../../utils/ObjectUtils";

const style = (theme, color = "normal") => {
  return `
        color: ${getNested(theme.colors, color, 500) ||
          theme.colors.secundary[500]};
    `;
};

export default style;

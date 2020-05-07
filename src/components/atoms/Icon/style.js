import { getNested } from "../../../utils/ObjectUtils";

const style = (theme, color, size) => {
  return `
    color: ${getNested(theme.colors, color, 500) || theme.colors.primary[500]};
    font-size: ${getNested(theme.sizes[size] || theme.sizes[500])};
  `;
};

export default style;

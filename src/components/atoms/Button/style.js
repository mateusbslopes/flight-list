import { getNested } from "../../../utils/ObjectUtils";
const style = (theme, background = {}, border = {}) => `
    background-color: ${getNested(
      theme.colors,
      background.color,
      background.strength
    ) || theme.colors.primary[500]};
    border-color: ${getNested(theme.colors, border.color, border.strength) ||
      theme.colors.primary[500]};
    border-bottom: ${theme.colors[border.bottom] || "none"};
    border-radius: 9px;
    border-width: 1px;
    height: 48px;
    outline: inherit;
`;

export default style;

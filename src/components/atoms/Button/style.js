import { getNested } from "../../../utils/ObjectUtils";
const style = (theme, border = {}, invertColors = false) => `
    ${
      invertColors
        ? `color: ${theme.colors.secundary[500]};
        background-color: ${theme.colors.ternary[500]};`
        : `
          background-color: ${theme.colors.primary[500]};
          color: ${theme.colors.ternary[500]};
        `
    }

    
    border-radius: 9px;
    border-width: 1px;
    height: 48px;
    outline: inherit;
    
    border-color: ${getNested(theme.colors, border.color, border.strength) ||
      theme.colors.primary[500]};
    border-bottom: ${theme.colors[border.bottom] || "none"};
    
`;

export default style;

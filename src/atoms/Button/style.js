const style = (borderColor, bgColor, borderBottomColor) => `
    background-color: ${bgColor || "white"};
    border-color: ${borderColor || "white"};
    border-bottom: ${borderBottomColor || "none"};
    border-radius: 9px;
    border-width: 1px;
    height: 48px;
    outline: inherit;
`;

export default style;

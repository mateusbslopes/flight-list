export default theme => `
    .calendar-label {
        align-self: start;
        font-style: italic;
        font-size: ${theme.sizes[300]};
        color: ${theme.colors.secundary[500]};
        font-weight: 20;
    }

    .calendar-input{
        color: ${theme.colors.primary[500]};
        background: none;
        border: none;
        border-bottom: 1px solid ${theme.colors.secundary[500]};
        font-size: ${theme.sizes[400]};
        outline: none;
    }
`;

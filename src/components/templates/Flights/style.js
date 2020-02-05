/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

export default theme => `

    font-family: ${theme.font.family};
    font-size: ${theme.sizes[400]};
    color: ${theme.colors.secundary[500]};
    font-weight: 500;

    strong {
        font-weight: 600;
    }

    h1 {
        font-weight: 600;
        font-size: ${theme.sizes[600]};
        text-transform: none;
    }

    ol li{
        list-style-type: none;
    }

    .flex-row {
        display: flex;
        flex-flow: row wrap;
    }

    .flex-row--centered {
        justify-content: center;
    }

    .flex-column {
        display: flex;
        flex-flow: column nowrap;
    }
`;

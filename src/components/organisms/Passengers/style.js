export default theme => `
    .options {
        display: flex;
        flex-direction: column;
    }

    .options-item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: ${theme.sizes[300]};
        font-style: italic;
        font-weight: ${theme.weights[500]};
    }

    .options-item-config {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

`;

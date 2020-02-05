export default theme => `

    .autocomplete-content {
        display: flex;
        flex-direction: column;
    }
    .autocomplete-config {
        display: flex;
        flex-direction: column;
    }

    .autocomplete-value {
        display: flex;
        flex-direction: row;
    }

    .autocomplete-value-desc {
        display: flex;
        align-self: flex-end;
        font-size: ${theme.sizes[300]};
    }

    .input-value{
        color: ${theme.colors.primary[500]};
        background: none;
        border: none;
        border-bottom: 1px solid ${theme.colors.secundary[500]};
        font-size: ${theme.sizes[400]};
        outline: none;
    }

    .list {
        position: absolute;
        margin-top: 45px;
        max-height: 400px;
        overflow-y: auto;
        background-color: ${theme.colors.ternary[500]};
        z-index: 40;
        border: solid 1px ${theme.colors.secundary[500]};
    }

    .list-item {
        font-size: ${theme.sizes[400]};
    }
    
    .list-item:hover{
        color: ${theme.colors.primary[500]};
    }
`;

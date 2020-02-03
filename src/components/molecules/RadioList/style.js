export default theme => `

    display: flex;
    flex-direction: column;

    .radio-option {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .radio-option input[type=radio] {
        position: absolute;
        opacity: 0;
        cursor: pointer;     
        width: 0;
        height: 0;
    }

    .radio-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${theme.sizes[300]};
        width: ${theme.sizes[300]};
        margin-right: 5px;
        background-color: ${theme.colors.ternary[500]};
        border: 1px solid ${theme.colors.primary[500]};
        border-radius: 50%;
    }

    .radio-button-icon {
        height: ${theme.sizes[200]};
        width: ${theme.sizes[200]};
        background-color: ${theme.colors.primary[500]};
        border-radius: 50%;
    }


`;

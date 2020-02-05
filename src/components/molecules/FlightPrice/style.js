export default theme => `

    .flight-price-content {
        display: flex;
        justify-content: center;
        height: 45px;
    }

    .extra-info {
        display: flex;
        justify-content: center;
    }

    .line-through {
        text-decoration: line-through;
    }

    .warning {
        color: ${theme.colors.alert[500]}
    }
`;

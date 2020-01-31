export default theme => `
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90px;
    background: white;
    border-top: solid 1px ${theme.colors.secundary[400]};

    .action-first {
        border-right: solid 1px ${theme.colors.secundary[400]};
    }

    .action {
        display: flex;
        flex-direction: row;
        width: 50%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
`;

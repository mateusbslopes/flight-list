export default theme => `
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 60%;
    height: 100%;
    left: 0;
    top: 0;
    background: white;
    -webkit-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    z-index: 30;

    .header {
        display: flex;
        flex-direction: row;
        background: ${theme.colors.secundary[400]};
        padding: 20px;
        justify-content: space-between;
    }

    .title {
        padding: 10px;
    }

    .body {
        padding: 10px 20px 0px 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        position: unset;
        widht: 100%;
    }
`;

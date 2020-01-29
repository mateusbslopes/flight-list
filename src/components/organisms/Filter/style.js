export default () => `
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
    background: white;
    padding: 20px;
    -webkit-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    -moz-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
    z-index: 30;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title {
        background: rgb(137,147,149);
        padding: 10px;
    }

    .body {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        position: unset;
        widht: 100%;
    }
`;

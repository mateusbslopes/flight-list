export default () => `
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 90px;
    background: white;
    border-top: solid 1px rgb(136,140,142);

    .filter {
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
    }

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

    .airline {
        display: flex;
        align-items: center;
    }

    .airline-label {
        font-size: 25px;
    }

    .airline-checkbox {
        display: flex;
        height: 25px;
        width: 25px;
        background-color: white;
        border: solid 1px rgb(26,188,156);
        border-radius: 5px;
        align-items: center;
        justify-content: center;
    }

    .action-first {
        border-right: solid 1px rgb(136,140,142);
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

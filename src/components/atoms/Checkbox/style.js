export default () => `
    display: flex;
    flex-direction: row;
    align-items: center;

    .label {
        font-size: 25px;
        color: rgb(135,147,149);
        margin-left: 5px;
        text-transform: capitalize;
    }

    .checkbox {
        display: flex;
        height: 25px;
        width: 25px;
        background-color: white;
        border: solid 1px rgb(26,188,156);
        border-radius: 5px;
        align-items: center;
        justify-content: center;
    }

`;

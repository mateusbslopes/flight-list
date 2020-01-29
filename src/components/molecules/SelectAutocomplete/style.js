export default () => `

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
        font-weight: bold;
        font-size: 20px;
    }

    .input-value{
        color: rgb(26, 188, 156);
        background: none;
        border: none;
        border-bottom: 1px solid rgb(135, 147, 149);
        font-size: 30px;
        outline: none;
    }

    .list {
        position: absolute;
        margin-top: 45px;
        max-height: 400px;
        overflow-y: auto;
        background-color: white;
        z-index: 40;
        border: solid 1px rgb(135, 147, 149);
    }

    .list-item {
        font-size: 30px;
    }
    
    .list-item:hover{
        color: rgb(26, 188, 156);
    }
`;

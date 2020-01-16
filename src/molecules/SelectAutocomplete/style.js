export default () => `

    .autocompleteContent {
        display: flex;
        flex-direction: column;
    }
    .autocompleteValue {
        display: flex;
        flex-direction: column;
    }

    .inputValue{
        color: rgb(26, 188, 156);
        background: none;
        border: none;
        border-bottom: 1px solid rgb(135, 147, 149);
        font-size: 30px;
        outline: none;
    }

    .label {
        align-self: start;
        font-style: italic;
        font-size: 30px;
        color: rgb(135, 147, 149);
        font-weight: 20;
    }

    .list {
        position: absolute;
        margin-top: 45px;
        max-height: 400px;
        overflow-y: auto;
        background-color: white;
    }

    .list-item {
        font-size: 20px;
    }
    
    .list-item:hover{
        color: rgb(26, 188, 156);
    }
`;

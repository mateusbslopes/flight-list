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
        max-height: 400px;
        overflow-y: auto;
        widht: 100%;
    }

    .list-item {
        font-size: 20px;
    }
    
    .list-item:hover{
        color: rgb(26, 188, 156);
    }
`;

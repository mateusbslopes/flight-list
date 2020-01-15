export default () => `

    .autocompleteContent {
        display: flex;
        flex-direction: column;
    }
    .autocompleteValue {
        display: flex;
        flex-direction: row;
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
        max-height: 90px;
        background-color: white;
        overflow-y: auto;
        z-index: 10;
        position: absolute;
        border: solid black 2px
    }
    
    .list-item:hover{
        color: rgb(26, 188, 156);
    }
`;

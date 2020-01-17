export default () => `

    .filter-option {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .error {
        background-color: red;
        border-radius: 5px;
        color: white;
        padding: 2px;
        position: absolute;
        font-size: 18px;
        z-index: 20;
    }

    .flight-dates {
        display: flex;
        flex-direction: row;
    }
    
    .search-buttom-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
    }

`;

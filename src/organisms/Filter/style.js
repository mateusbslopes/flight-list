export default () => `

    .filter-option {
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    .filter-value {
        display: flex;
        flex-direction: row;
    }

    .filter-locations {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .filter-locations-value {
        font-size: 30px;
        color: rgb(135, 147, 149);
        font-weight: 20;
    }

    .filter-date {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 30px;
    }

    .filter-date-day {
        font-weight: 20;
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

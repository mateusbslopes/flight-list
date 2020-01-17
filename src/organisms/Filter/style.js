export default () => `

    .filter-options {
        display: flex;
        flex-direction: column;
        z-index: 10;
        background-color: white;
    }

    .filter-value {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid rgb(136, 140, 142);
        padding: 15px;
    }

    .filter-action {
        display: flex;
        align-items: center;
        background-color: rgb(26, 188, 156);
        height: 45px;
        padding: 18px;
        border-radius: 5px;
    }

    .filter-option {
        padding: 25px;
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
        margin-right: 10px;
    }

    .filter-passengers {
        font-size: 40px;
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

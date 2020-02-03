export default theme => `

    .filter-options {
        display: flex;
        flex-direction: column;
        z-index: 10;
        background-color: ${theme.colors.ternary[500]};
    }

    .filter-value {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: 1px solid ${theme.colors.secundary[400]};
        padding: 15px;
    }

    .filter-action {
        display: flex;
        align-items: center;
        background-color: ${theme.colors.primary[500]};
        height: 45px;
        padding: 18px;
        border-radius: 5px;
        border-bottom: 2px solid ${theme.colors.primary[600]};
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
        color: ${theme.colors.secundary[500]};
        font-weight: 20;
    }

    .filter-date {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: ${theme.sizes[400]};
    }

    .filter-date-day {
        font-weight: ${theme.weights[500]};
        margin-right: 10px;
        margin-left: 10px;
    }

    .filter-passengers {
        font-size: ${theme.sizes[500]};
    }

    .passengers {
        display: flex;
        flex-direction: column;
    }

    .warning {
        padding: 5px;
        display: flex;
        border-radius: 5px;
        background-color: ${theme.colors.alert};
        color: ${theme.colors.ternary[500]};
        font-size: ${theme.sizes[300]};
        z-index: 20;
    }

    .error {
        background-color: ${theme.colors.error.background};
        border-radius: 5px;
        color: ${theme.colors.error.text};
        padding: 5px;
        position: absolute;
        font-size: ${theme.sizes[300]};
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

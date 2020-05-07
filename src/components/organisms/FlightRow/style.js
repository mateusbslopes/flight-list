const style = theme => `
    
    margin-bottom: 10px;
    background-color: white;

    .flight-row-content {
        display: flex;
        flex-flow: column nowrap;
        padding: 0px 20px 0px 20px;
    }

    .flight-row-descriptions {
        padding: 30px 0px 30px 0px; 
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .flight-row-action {
        padding: 30px 0px 30px 0px; 
        border-top: 1px dashed ${theme.colors.secundary[400]};
    }
`;

export default style;

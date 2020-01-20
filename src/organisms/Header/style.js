export default () => `
    .header-content {
        background-color: white;
        padding: 20px;
    }
    
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid rgb(136, 140, 142);
    }

    .links {
        display: none;
    }

    .header-navigation {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;

    }
    
    .header-navigation-item {
        display: flex;
        align-items: center;
    }

    .header-navigation-item-selected {
        border-bottom: 2px solid rgb(26, 188, 156);
    }

`;

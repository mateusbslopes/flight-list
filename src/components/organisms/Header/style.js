export default () => `
    .header-content {
        background-color: white;
        padding: 20px 20px 0px 20px;
    }

    .links {
        display: none;
    }

    .header-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .header-navigation-item {
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: center;
    }

    .header-navigation-item-first {
        border-right: 1px solid rgb(136, 140, 142);
    }

    .header-navigation-item-selected {
        border-bottom: 3px solid rgb(26, 188, 156);
    }

`;

export default theme => `
    display: flex;
    justify-content: space-between;
    align-items: center;


    .header-navigation-item {
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: center;
        border-top: 1px solid ${theme.colors.secundary[400]};
        border-bottom: 1px solid ${theme.colors.secundary[400]};
    }

    .header-navigation-item-first {
        border-right: 1px solid ${theme.colors.secundary[400]};
    }

    .header-navigation-item-selected {
        border-bottom: 3px solid ${theme.colors.primary[500]};
    }

`;

export default theme => `
    
    .filter-wrapper {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 60%;
        height: 100%;
        left: -1000px;
        top: 0;
        background: ${theme.colors.ternary[500]};
        -webkit-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        -moz-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        z-index: 30;
        transition: left .5s
    }

    .filter-wrapper.filter-is-open {
        left: 0px;
    }

    .header {
        display: flex;
        flex-direction: row;
        padding: 20px;
        justify-content: space-between;
    }

    .title {
        padding: 10px;
    }

    .body {
        padding: 10px 20px 0px 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        position: unset;
        widht: 100%;
    }
`;

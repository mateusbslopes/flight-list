export default (theme, margin = 0) => `
    .content {
        display: flex;
        -webkit-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        -moz-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        margin: ${margin}
    }
    .header {
        display: flex;
        width: 100%;
        border-radius: 5px 5px 0px 0px;
        height: 80px;
        align-items: center;
    }

    .card-body {
        width: 100%;
    }
`;

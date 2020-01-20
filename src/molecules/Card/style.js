export default (margin = 0) => `
    .content {
        display: inline-flex;
        flex-direction: column;
        -webkit-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        -moz-box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        box-shadow: 1px 1px 4px 0px rgba(158,158,158,1);
        margin: ${margin}
    }
    .header {
        background-color: rgb(137, 147, 149);
        border-radius: 5px 5px 0px 0px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .body {}
`;

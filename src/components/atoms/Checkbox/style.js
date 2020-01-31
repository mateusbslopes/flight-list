import { getNested } from "../../../utils/ObjectUtils";

export default theme => `
    display: flex;
    flex-direction: row;
    align-items: center;

    .checkbox-label {
        margin-left: 5px;
    }

    .checkbox {
        display: flex;
        height: 25px;
        width: 25px;
        background-color: ${theme.colors.ternary[500]};
        border: solid 1px ${theme.colors.primary[500]};
        border-radius: 5px;
        align-items: center;
        justify-content: center;
    }

`;

import React from "react";
import { connect } from "react-redux";
import style from "./style";
import Text from "../../atoms/Text";

import { openFilter as openFilterAction } from "../../../actions";

function Footer({ openFilter }) {
  return (
    <div css={style}>
      <div className="action action-first" onClick={openFilter}>
        <Text>FILTRAR VOOS</Text>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  openFilter: () => openFilterAction()
};

export default connect(null, mapDispatchToProps)(Footer);

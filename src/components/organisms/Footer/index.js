import React from "react";
import { connect } from "react-redux";
import style from "./style";

import { openFilter as openFilterAction } from "../../../actions";
import { FormattedMessage } from "react-intl";

function Footer({ openFilter }) {
  return (
    <div css={theme => style(theme)}>
      <div className="action action-first" onClick={openFilter}>
        <FormattedMessage id="filterFlights" />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  openFilter: () => openFilterAction()
};

export default connect(null, mapDispatchToProps)(Footer);

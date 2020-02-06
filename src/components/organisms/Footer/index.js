import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { openFilter as openFilterAction } from "../../../actions";
import style from "./style";

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

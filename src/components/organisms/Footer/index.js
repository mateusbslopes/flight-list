import React from "react";
import { connect } from "react-redux";
import style from "./style";
import Text from "../../atoms/Text";

import { openFilter as openFilterAction } from "../../../actions";

class Footer extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className="action action-first" onClick={this.props.openFilter}>
          <Text>FILTRAR VOOS</Text>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  openFilter: () => openFilterAction()
};

export default connect(null, mapDispatchToProps)(Footer);

import React from "react";
import { connect } from "react-redux";
import style from "./style";
import Text from "../../atoms/Text";

import { openSearch as openSearchAction } from "../../../actions";

class Footer extends React.Component {
  render() {
    return (
      <div css={style}>
        <div className="action action-first" onClick={this.props.openSearch}>
          <Text>FILTRAR VOOS</Text>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  openSearch: () => openSearchAction()
};

export default connect(null, mapDispatchToProps)(Footer);

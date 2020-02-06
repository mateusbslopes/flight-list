import React from "react";
import style from "./style";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import Card from "../../molecules/Card";
import Icon from "../../atoms/Icon";

export default function Menu({ close }) {
  return (
    <div css={theme => style(theme)}>
      <Card
        header={
          <div className="header">
            <FormattedMessage id="menuHeader" />
            <div onClick={close}>
              <Icon name="icon-max-navigation-close" />
            </div>
          </div>
        }
      />

      <div className="body">
        <FormattedMessage id="menuBody" />
        <FormattedHTMLMessage id="iconAttribute" />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import StringUtils from "../../../utils/StringUtils";
import style from "./style";

export default function SelectAutocomplete({
  value,
  placeholder,
  label,
  onChange,
  data
}) {
  function isEmpty(value) {
    return Object.entries(value).length === 0;
  }

  const [search, setSearchUnsafe] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, setState] = useState(isEmpty(value) ? "empty" : "fulfilled");
  const intl = useIntl();

  const setSearch = value =>
    setSearchUnsafe(StringUtils.removeDangerousCharacters(value));

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  function handleClick() {
    setIsListOpen(true);
    setState("searching");
  }

  function handleBlur(value) {
    let state = isEmpty(value) ? "empty" : "fulfilled";
    setState(state);
    setIsListOpen(false);
  }

  function filterData([label, airportCode]) {
    if (!search) return [];

    let preparedSearch = StringUtils.prepareToCompare(search);
    return (
      StringUtils.prepareToCompare(label).search(preparedSearch) >= 0 ||
      StringUtils.prepareToCompare(airportCode).search(preparedSearch) >= 0
    );
  }

  function selectItem(evt, label, airportCode) {
    setState("fulfilled");
    onChange({ label, airportCode });
  }

  function handleOnMouseDown(evnt) {
    // Prevent blur on input to happen, allowing to click on list-item to be triggered
    evnt.preventDefault();
  }

  function getTextWithMatch(text) {
    let searchToCompare = StringUtils.prepareToCompare(search);
    let textToCompare = StringUtils.prepareToCompare(text);
    let matchIndex = textToCompare.indexOf(searchToCompare);
    let parts = [];

    if (!search || matchIndex === -1) return text;

    parts[0] = text.slice(0, matchIndex);
    parts[1] = text.slice(matchIndex, matchIndex + searchToCompare.length);
    parts[2] = text.slice(matchIndex + searchToCompare.length, text.length);

    return (
      <span>
        {parts[0]}
        <span className="match">{parts[1]}</span>
        {parts[2]}
      </span>
    );
  }
  // TODO Split label to remove "Todos" and translate it
  function getDisplayableRow([label, airportCode, country]) {
    return (
      <li
        className="list-item"
        key={airportCode}
        onClick={evt => selectItem(evt, label, airportCode)}
        onMouseDown={handleOnMouseDown}
      >
        {getTextWithMatch(airportCode)}
        {", "}
        {getTextWithMatch(
          label.replace("Todos", intl.formatMessage({ id: "all" }))
        )}{" "}
        {country}
      </li>
    );
  }

  function getDisplayedValue(value) {
    switch (state) {
      case "searching":
        return search;
      case "empty":
        return intl.formatMessage({ id: placeholder });
      case "fulfilled":
        return value.label;
    }
  }

  function getDataToDisplay(data) {
    return data.filter(filterData).map(getDisplayableRow);
  }

  return (
    <div css={theme => style(theme)}>
      <div className="autocomplete-content" onBlur={() => handleBlur(value)}>
        <label>
          <FormattedMessage id={label} />
        </label>
        <div className="autocomplete-config">
          <div className="autocomplete-value col-sm-16">
            <input
              className="input-value col-sm-8"
              type="text"
              value={getDisplayedValue(value)}
              onChange={handleChange}
              onClick={handleClick}
            />
            <div className="autocomplete-value-desc">
              <div>{state === "fulfilled" && value.airportCode}</div>
            </div>
          </div>
          {state === "searching" && (
            <div className="col-sm-8 list">
              <ol>{getDataToDisplay(data)}</ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

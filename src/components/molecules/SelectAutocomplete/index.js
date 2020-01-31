import React, { useState } from "react";
import StringUtils from "../../../utils/StringUtils";
import Text from "../../atoms/Text";
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

  const [search, setSearch] = useState("");
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [state, setState] = useState(isEmpty(value) ? "empty" : "fulfilled");

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

  // TODO Transform in component (declared in this same file)
  function getDisplayableRow([label, airportCode, country]) {
    return (
      <div
        className="list-item"
        key={airportCode}
        onClick={evt => selectItem(evt, label, airportCode)}
        onMouseDown={handleOnMouseDown}
      >
        {`${airportCode} ${label}, ${country}`}{" "}
      </div>
    );
  }

  // TODO Transform in component?
  function getDisplayedValue(value) {
    switch (state) {
      case "searching":
        return search;
      case "empty":
        return placeholder;
      case "fulfilled":
        return value.label;
    }
  }

  function getDataToDisplay(data) {
    return data.filter(filterData).map(getDisplayableRow);
  }

  return (
    <div css={style}>
      <div className="autocomplete-content" onBlur={() => handleBlur(value)}>
        <Text size={300} weight={500}>
          {label}
        </Text>
        <div className="autocomplete-config">
          <div className="autocomplete-value col-sm-16">
            <input
              className="input-value col-sm-8"
              type="text"
              value={`${getDisplayedValue(value)}`}
              onChange={handleChange}
              onClick={handleClick}
            />
            <div className="autocomplete-value-desc">
              <div>
                {state === "fulfilled" && <Text>{value.airportCode}</Text>}
              </div>
            </div>
          </div>
          {state === "searching" && (
            <div className="col-sm-8 list">
              <Text>{getDataToDisplay(data)}</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import {
  SelectBox,
  OptionsContainer,
  Selected,
  Options,
  Option,
  Label,
  Input,
  ClickDiv,
} from "./Select.style";

const Select = ({
  options,
  disabled,
  defaultValue,
  onChange,
  customClasses,
}) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOpenCloseSelector = useCallback(
    () => setIsSelectorOpen((prevState) => !prevState),
    [setIsSelectorOpen]
  );

  const handleSelect = useCallback(
    (value) => {
      setSelectedValue(value);
      setIsSelectorOpen(false);
      if (onChange) {
        onChange(value);
      }
    },
    [onChange, setSelectedValue]
  );

  return (
    <SelectBox {...customClasses}>
      <Selected
        onClick={!disabled ? handleOpenCloseSelector : undefined}
        disabled={disabled}
      >
        {selectedValue || defaultValue}
      </Selected>
      {isSelectorOpen ? <ClickDiv onClick={handleOpenCloseSelector} /> : null}
      <OptionsContainer isSelectorOpen={isSelectorOpen} {...customClasses}>
        <Options>
          {options.map((option) => (
            <Option onClick={handleSelect.bind(this, option)}>
              <Input type="radio" id={option} />
              <Label for={option}>{option}</Label>
            </Option>
          ))}
        </Options>
      </OptionsContainer>
    </SelectBox>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  customClasses: PropTypes.object,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  options: [],
  defaultValue: undefined,
  onChange: undefined,
  customClasses: undefined,
  disabled: false,
};

export default Select;

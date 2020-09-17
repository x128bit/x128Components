import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import {
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Span,
  Label,
} from "./Checkbox.style";

const Checkbox = ({
  label,
  isChecked,
  onChange,
  customClasses,
  name,
  disabled,
}) => {
  const [stateIsChecked, setStateIsChecked] = useState(isChecked);

  useEffect(() => {
    setStateIsChecked(isChecked);
  }, [isChecked, setStateIsChecked]);

  const handleChange = useCallback(
    (event) => {
      const { target: { checked } = {} } = event;
      setStateIsChecked(checked);
      if (onChange) {
        onChange(event, checked);
      }
    },
    [onChange]
  );

  return (
    <Label {...customClasses} disabled={disabled}>
      <HiddenCheckbox
        checked={stateIsChecked}
        onChange={handleChange}
        name={name}
        disabled={disabled}
      />
      <StyledCheckbox
        checked={stateIsChecked}
        {...customClasses}
        disabled={disabled}
      >
        <Icon viewBox="0 0 24 24" disabled={disabled}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <Span {...customClasses} disabled={disabled}>
        {label}
      </Span>
    </Label>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  customClasses: PropTypes.object,
  name: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  isChecked: false,
  label: undefined,
  onChange: undefined,
  customClasses: undefined,
  name: "check",
  disabled: false,
};

export default Checkbox;

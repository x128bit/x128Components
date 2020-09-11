import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { Div, Input, Label } from "./TextField.style";

const TextField = ({
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  customClasses,
}) => {
  const [stateValue, setStateValue] = useState(value);

  useEffect(() => {
    setStateValue(value);
  }, [value, setStateValue]);

  const handleChange = useCallback(
    (event) => {
      const { target: { value: newValue } = {} } = event;
      setStateValue(newValue);
      if (onChange) {
        onChange(event, newValue);
      }
    },
    [setStateValue, onChange]
  );

  return (
    <Div {...customClasses}>
      <Input
        type="text"
        id="textfield"
        value={stateValue}
        required
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...customClasses}
      />
      {label ? (
        <Label for="textfield" {...customClasses}>
          {label}
        </Label>
      ) : null}
    </Div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

TextField.defaultProps = {
  value: undefined,
  label: undefined,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
};

export default TextField;

import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { Button as CustomButton } from "./Button.style";

const Button = ({
  startIcon: startIconProp,
  endIcon: endIconProp,
  children,
  customClasses,
  disabled,
  variant,
  ...restProps
}) => {
  const startIcon = useMemo(() => <span>{startIconProp}</span>, [
    startIconProp,
  ]);

  const endIcon = useMemo(() => <span>{endIconProp}</span>, [endIconProp]);

  return (
    <CustomButton
      variant={variant}
      disabled={disabled}
      {...customClasses}
      {...restProps}
    >
      {startIcon}
      {children}
      {endIcon}
    </CustomButton>
  );
};

/*Importante
Por algún motivo Storybook detecta los PropTypes de "node" y "any" como objetos 
y no como cualquier tipo. En este caso están definidos como strings por defecto
pero puedes cambiarlo al formato que tu quieras o incluso quitarlo :D
*/
Button.propTypes = {
  //   startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  children: PropTypes.string.isRequired,
  customClasses: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  //   startIcon: undefined,
  endIcon: undefined,
  isChecked: false,
  onChange: undefined,
  customClasses: undefined,
  disabled: false,
};

export default Button;

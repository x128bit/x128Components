import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { CustomButton } from "./Button.style";

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

  console.log(typeof startIconProp);

  const endIcon = useMemo(() => <span>{endIconProp}</span>, [endIconProp]);

  return (
    <CustomButton
      variant={variant}
      disabled={disabled}
      customClasses={customClasses}
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
y no como cualquier tipo. Debido a eso no añado proptypes para los icons pero vosotros si quereis
los podeis añadir sin problema :D
*/
Button.propTypes = {
  children: PropTypes.string.isRequired,
  customClasses: PropTypes.object,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  customClasses: undefined,
  variant: "contained",
  disabled: false,
};

export default Button;

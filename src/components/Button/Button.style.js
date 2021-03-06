import styled from "styled-components";

export const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: ${({ customClasses: { border } = {}, variant }) => {
    if (variant === "outlined") {
      return border || "1px solid #1976d2";
    }
    return border || "none";
  }};
  border-radius: ${({ customClasses: { borderRadius } = {} }) =>
    borderRadius || "4px"};
  padding: ${({ customClasses: { padding } = {} }) => padding || "0 16px"};
  margin: ${({ customClasses: { margin } = {} }) => margin || "10px"};
  min-width: ${({ customClasses: { width } = {} }) => width || "64px"};
  min-height: ${({ customClasses: { height } = {} }) => height || "36px"};
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  background-color: ${({
    customClasses: { backgroundColor } = {},
    variant,
  }) => {
    if (variant === "outlined") {
      return backgroundColor || "rgba(0, 0, 0, 0)";
    }
    return backgroundColor || "#1976d2";
  }};
  color: ${({ customClasses: { color } = {}, variant }) => {
    if (variant === "outlined") {
      return color || "#1976d2";
    }
    return color || "white";
  }};
  font-weight: ${({ customClasses: { fontWeight } = {} }) =>
    fontWeight || "500"};
  font-size: ${({ customClasses: { fontSize } = {} }) =>
    fontSize || "0.875rem"};
  overflow: hidden;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
  :focus {
    border: ${({ customClasses: { focus: { border } = {} } = {}, variant }) => {
      if (variant === "outlined") {
        return border || "1px solid #1976d2";
      }
      return border || "none";
    }};
  }
  :hover,
  :focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ customClasses: { rippleColor } = {}, variant }) => {
      if (variant === "outlined") {
        return rippleColor || "rgba(25, 118, 210, 0.6)";
      }
      return rippleColor || "white";
    }};
    opacity: 0;
    transition: opacity 0.2s;
  }
  :after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: ${({ customClasses: { rippleColor } = {}, variant }) => {
      if (variant === "outlined") {
        return rippleColor || "rgba(25, 118, 210, 0.6)";
      }
      return rippleColor || "white";
    }};
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }
  :hover::before {
    opacity: 0.08;
  }

  :focus::before {
    opacity: 0.24;
  }
  :hover:focus::before {
    opacity: 0.3;
  }

  :active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  :disabled {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: initial;
  }

  :disabled::before {
    opacity: 0;
  }

  :disabled::after {
    opacity: 0;
  }
  ${({ customClasses }) => ({ ...customClasses })}
`;

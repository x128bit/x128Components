import styled from "styled-components";

const DEFAULT_COLORS = {
  checked: "royalblue",
  unchecked: "white",
  borderUnchecked: "2px solid rgb(118, 118, 118)",
  borderChecked: "2px solid royalblue",
  borderDisabled: "2px solid rgba(118, 118, 118, 0.6)",
  disabled: "rgba(118, 118, 118, 0.6)",
};

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: ${({ checkbox = {} }) => checkbox.width || "18px"};
  height: ${({ checkbox = {} }) => checkbox.height || "18px"};
  background: ${({ checkBox = {}, checked, disabled }) => {
    if (disabled) {
      const backgroundColor = checked
        ? DEFAULT_COLORS.disabled
        : DEFAULT_COLORS.unchecked;
      return backgroundColor;
    }
    const checkedColor = checkBox.checked || DEFAULT_COLORS.checked;
    const uncheckedColor = checkBox.unchecked || DEFAULT_COLORS.unchecked;
    return checked ? checkedColor : uncheckedColor;
  }};
  border-radius: 3px;
  transition: all 150ms;
  border: ${({ checkBox = {}, checked, disabled }) => {
    if (disabled) {
      return DEFAULT_COLORS.borderDisabled;
    }
    const checkedColor = checkBox.checked || DEFAULT_COLORS.borderChecked;
    const uncheckedColor = checkBox.border || DEFAULT_COLORS.borderUnchecked;
    return checked ? checkedColor : uncheckedColor;
  }};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Span = styled.span`
  margin-left: 10px;
  font-size: ${({ label = {} }) => label.fontSize || "18px"};
  color: ${({ label = {}, disabled }) => {
    if (disabled) {
      return DEFAULT_COLORS.disabled;
    }
    return label ? label.color : "black";
  }};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
`;

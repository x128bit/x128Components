import styled from "styled-components";

export const Div = styled.div`
  width: ${({ div = {} }) => div.width || "100%"};
  position: ${({ div = {} }) => div.position || "relative"};
`;

export const Label = styled.label`
  color: ${({ label = {} }) => label.color || "#8d8d8d"};
  position: ${({ label = {} }) => label.position || "absolute"};
  top: ${({ label = {} }) => label.top || "18px"};
  left: ${({ label = {} }) => label.left || "13px"};
  background: ${({ label = {} }) => label.background || "#ffffff"};
  transition: ${({ label = {} }) => label.transition || "0.2s ease"};
`;

export const Input = styled.input`
  min-width: ${({ input = {} }) => input.width || "10%"};
  outline: ${({ input = {} }) => input.outline || "none"};
  border: ${({ input = {} }) => input.border || "1px solid #dadce0"};
  padding: ${({ input = {} }) => input.padding || "16px 13px"};
  font-size: ${({ input = {} }) => input.fontSize || "18px"};
  border-radius: ${({ input = {} }) => input.borderRadius || "5px"};
  :focus {
    border: ${({ input: { focus = {} } = {} }) =>
      focus.border || "2px solid royalblue"};
  }
  :focus + label {
    top: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.top || "-8px"};
    padding: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.padding || "0 3px"};
    font-size: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.fontSize || "14px"};
    color: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.color || "royalblue"};
  }
  :valid + label {
    top: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.top || "-8px"};
    padding: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.padding || "0 3px"};
    font-size: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.fontSize || "14px"};
    color: ${({ input: { focus: { label = {} } = {} } = {} }) =>
      label.color || "#8d8d8d"};
  }
`;

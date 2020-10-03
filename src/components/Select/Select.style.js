import styled from "styled-components";

export const SelectBox = styled.div`
  display: flex;
  min-width: 200px;
  width: ${({ selector: { width } = {} }) => width || "250px"};
  flex-direction: column;
  padding: 12px;
  cursor: pointer;
`;

export const OptionsContainer = styled.div`
  min-width: ${({ options: { minWidth } = {} }) => minWidth || "120px"};
  width: ${({ options: { width } = {} }) => width || "250px"};
  background: ${({ options: { background } = {} }) => background || "white"};
  color: ${({ options: { color } = {} }) => color || "black"};
  transition: all 0.4s;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  opacity: ${({ isSelectorOpen = {} }) => (isSelectorOpen ? 1 : 0)};
  max-height: ${({ isSelectorOpen = {} }) => (isSelectorOpen ? "224px" : 0)};
  overflow-y: ${({ isSelectorOpen = {} }) =>
    isSelectorOpen ? "scroll" : "hidden"};
  z-index: 1;
`;

export const Selected = styled.div`
  padding: 12px;
  border: ${({ selected: { border } = {} }) => border || "1px solid #dadce0"};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  color: ${({ disabled }) => (disabled ? "rgba(0, 0, 0, 0.3)" : "black")};
`;

export const Options = styled.ul`
  padding-right: 17px;
  width: calc(100% + 17px);
  padding-left: 0;
  margin: 0;
`;

export const Option = styled.li`
  cursor: pointer;
  list-style: none;
  min-height: auto;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
  font-weight: 400;
  width: auto;
  overflow: hidden;
  font-size: 1rem;
  box-sizing: border-box;
  min-height: 48px;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  letter-spacing: 0.00938em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.label`
  cursor: pointer;
  width: 100%;
  margin-left: 10px;
`;

export const Input = styled.input`
  display: none;
`;

export const ClickDiv = styled.div`
  z-index: 0;
  cursor: auto;
  position: fixed;
  right: 0px;
  bottom: 0px;
  top: 0px;
  left: 0px;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
`;

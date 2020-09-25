import React from "react";
import Button from "./Button";

export default {
  title: "x128/Button",
  component: Button,
};

const Component = (args) => <Button {...args} />;

const ComponentInDiv = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      width: "10%",
      flexDirection: "column",
    }}
  >
    <Button {...args} />
    <Button {...args} />
  </div>
);

export const ButtonComponent = Component.bind({});

export const ButtonComponentWithCustomClasses = Component.bind({});

export const ButtonComponentInDiv = ComponentInDiv.bind({});

export const ButtonComponentOnClick = Component.bind({});

export const ButtonComponentWithIcon = Component.bind({});

ButtonComponent.args = { children: "x128", disabled: false };

ButtonComponentWithCustomClasses.args = {
  children: "x128",
  variant: "outlined",
  customClasses: {
    borderRadius: "0px",
    border: "5px solid green",
    focus: {
      border: "7px solid green",
    },
    color: "black",
    rippleColor: "black",
    transition: "1s ease",
  },
  disabled: false,
};

ButtonComponentInDiv.args = {
  children: "x128",
  disabled: false,
};

ButtonComponentOnClick.args = {
  children: "x128",
  onClick: () => alert("onClick"),
  disabled: false,
};

ButtonComponentWithIcon.args = {
  children: "x128",
  startIcon: (
    <span style={{ margin: "10px" }} role="img" aria-label="emoji">
      🔥
    </span>
  ),
  disabled: false,
};

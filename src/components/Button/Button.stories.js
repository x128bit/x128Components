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
      width: "5%",
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

ButtonComponent.args = { children: "x128" };

ButtonComponentWithCustomClasses.args = {
  children: "x128",
  customClasses: {
    borderRadius: "none",
    color: "black",
    backgroundColor: "yellow",
    rippleColor: "black",
  },
};

ButtonComponentInDiv.args = {
  children: "x128",
};

ButtonComponentOnClick.args = {
  children: "x128",
  onClick: () => alert("onClick"),
};

ButtonComponentWithIcon.args = {
  children: "x128",
  startIcon: (
    <span style={{ margin: "10px" }} role="img" aria-label="emoji">
      🔥
    </span>
  ),
};

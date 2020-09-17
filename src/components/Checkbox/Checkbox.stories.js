import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "x128/Checkbox",
  component: Checkbox,
};

const Component = (args) => <Checkbox {...args} />;

const ComponentWithClasses = (args) => <Checkbox {...args} />;

const ComponentOnChangeAlert = (args) => <Checkbox {...args} />;

export const CheckBox = Component.bind({});
export const CheckBoxCustomClasses = ComponentWithClasses.bind({});
export const CheckBoxOnClick = ComponentOnChangeAlert.bind({});

CheckBox.args = {
  isChecked: true,
};

CheckBoxCustomClasses.args = {
  customClasses: {
    checkbox: {
      width: "40px",
      height: "40px",
    },
    label: {
      color: "red",
      fontSize: "30px",
    },
  },
};

CheckBoxOnClick.args = {
  onChange: () => alert("onChange"),
};

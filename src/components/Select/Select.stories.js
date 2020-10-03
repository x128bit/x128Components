import React from "react";
import Select from "./Select";

export default {
  title: "x128/Select",
  component: Select,
};

const Component = (args) => <Select {...args} />;

const ComponentWithClasses = (args) => <Select {...args} />;

const ComponentOnChangeAlert = (args) => <Select {...args} />;

export const Selector = Component.bind({});
export const SelectorCustomClasses = ComponentWithClasses.bind({});
export const SelectorOnClick = ComponentOnChangeAlert.bind({});

Selector.args = {
  options: ["hola", "quetal", "esto", "es un", "selector de", "x128bit"],
  defaultValue: "Selecciona una opción",
};

SelectorCustomClasses.args = {
  defaultValue: "Selecciona una opción",
  options: ["custom", "classes"],
  customClasses: {
    selector: {
      width: "100%",
    },
    options: {
      color: "red",
      background: "black",
      width: "100%",
    },
  },
};

SelectorOnClick.args = {
  options: ["hola", "quetal", "esto", "es un", "selector de", "x128bit"],
  defaultValue: "Selecciona una opción",
  onChange: (value) => alert(`campo seleccionado: ${value}`),
};

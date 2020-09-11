import React from "react";
import TextField from "./TextField";

export default {
  title: "x128/TextField",
  component: TextField,
};

export const Textfield = () => <TextField customClasses={{}} />;
export const TextfieldWithLabel = () => <TextField label="Texto uno" />;
export const TextfieldWithCustomClasses = () => (
  <TextField
    customClasses={{
      input: {
        width: "15%",
        border: "2px solid black",
        padding: "5px",
        focus: {
          border: "2px solid brown",
        },
      },
    }}
  />
);

import React from "react";
import s from "./FormsControls.module.css";
import { Field } from "redux-form";

export const Element = (Element) => ({ input, meta, ...props }) => {
  debugger;
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};

export const FieldCreator = (
  placeholder,
  name,
  component,
  validate,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        {...props}
        name={name}
        component={component}
        validate={validate}
      />{" "}
      {text}
    </div>
  );
};

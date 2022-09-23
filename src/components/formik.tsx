import React from "react";
import { Field, FieldHookConfig, useField } from "formik";

export const Input = (props: FieldHookConfig<{}>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Field {...field} {...props} type="text" className="input-default" />
      {meta.error && meta.touched && (
        <div className="py-2 text-red">{meta.error}</div>
      )}
    </>
  );
};

export const PasswordInput = (props: FieldHookConfig<{}>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Field {...field} {...props} type="password" className="input-default" />
      {meta.error && meta.touched && (
        <div className="py-2 text-red">{meta.error}</div>
      )}
    </>
  );
};

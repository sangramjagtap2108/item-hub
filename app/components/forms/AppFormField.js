import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  // To access formik props like handleChange, touched etc we can use context
  const { handleChange, handleSubmit, errors, setFieldTouched, touched } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

const styles = StyleSheet.create({});

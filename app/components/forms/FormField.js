import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  // To access formik props like handleChange, touched etc we can use context
  const {
    handleChange,
    handleSubmit,
    errors,
    setFieldTouched,
    setFieldValue,
    values,
    touched,
  } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        // onChangeText={handleChange(name)}

        // for reset form - setFieldValue,value, earlier was not required
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;

const styles = StyleSheet.create({});

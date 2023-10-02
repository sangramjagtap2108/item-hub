import React, { useState } from "react";
import Screen from "../components/Screen";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import AppTextInput from "../components/TextInput";
import AppButton from "../components/Button";
import * as Yup from "yup";
import AppText from "../components/Text/Text";
import ErrorMessage from "../components/forms/ErrorMessage";

// importing in a single statement from index.js, no need to mention index.js
import { AppFormField, SubmitButton, AppForm } from "../components/forms/";
// import AppFormField from "../components/forms/AppFormField";
// import SubmitButton from "../components/forms/SubmitButton";
// import AppForm from "../components/forms/AppForm";

// Yup - for form validation
const validationSchema = Yup.object().shape({
  // label - email will be treated as Email. Validation errors msg will contain "Email"
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // <Screen style={styles.container}>
    //   <Image style={styles.logo} source={require("../assets/logo-red.png")} />
    //   <AppTextInput
    //     //  autoCapitalize - will not capitalize first letter
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     icon="email"
    //     placeholder="Email"
    //     keyboardType="email-address"
    //     onChangeText={(text) => setEmail(text)}
    //     // only works on ios
    //     textContentType="emailAddress"
    //   />
    //   <AppTextInput
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //     icon="lock"
    //     placeholder="Password"
    //     secureTextEntry
    //     onChangeText={(text) => setPassword(text)}
    //     textContentType="password"
    //   />
    //   <AppButton title="Login" onPress={() => console.log(email, password)} />
    // </Screen>

    // <Screen style={styles.container}>
    //   <Image style={styles.logo} source={require("../assets/logo-red.png")} />
    //   {/* To build better forms - Formik
    //   takes 2 props - intialValues and onSubmit */}
    //   <Formik
    //     initialValues={{ email: "", password: "" }}
    //     // values has all the form values
    //     onSubmit={(values) => console.log(values)}
    //     validationSchema={validationSchema}
    //   >
    //     {/* Formik takes function which returns jsx*/}
    //     {/* {({ handleChange,handleSubmit }) => {JSX}} */}
    //     {/* Formik handles all the validations - errors contains errors of all the fields in the form of the key-value pairs */}
    //     {/* touched - contains key-value pairs similar to array to check if input fields are touched or not
    //     setFieldTouched - to set field as touched */}
    //     {(
    //       { handleChange, handleSubmit, errors, setFieldTouched, touched } //use () and not {}
    //     ) => (
    //       <>
    //         <AppTextInput
    //           autoCapitalize="none"
    //           autoCorrect={false}
    //           icon="email"
    //           placeholder="Email"
    //           keyboardType="email-address"
    //           // onChangeText={(text) => setEmail(text)}
    //           // "email" - same as mentioned in the initialValues
    //           onChangeText={handleChange("email")}
    //           textContentType="emailAddress"
    //           // when we are typing email, it is giving validation error to password as well even though we
    //           // havent touched the password field yet. We need to validate the field only if it is touched
    //           // onBlur - The onBlur event handler is called when focus has left the element. For example, it's
    //           // called when the user clicks outside of a focused text input.
    //           onBlur={() => setFieldTouched("email")}
    //         />
    //         {/* <AppText style={{ color: "red" }}>{errors.email}</AppText> */}
    //         {/* Approach 1 */}
    //         {/* {touched.email && <ErrorMessage error={errors.email} />} */}
    //         {/* Approach 2 - using visible prop in ErrorMessage */}
    //         <ErrorMessage error={errors.email} visible={touched.email} />
    //         <AppTextInput
    //           autoCapitalize="none"
    //           autoCorrect={false}
    //           icon="lock"
    //           placeholder="Password"
    //           secureTextEntry
    //           // onChangeText={(text) => setPassword(text)}
    //           onChangeText={handleChange("password")}
    //           textContentType="password"
    //           onBlur={() => setFieldTouched("password")}
    //         />
    //         {/* <AppText style={{ color: "red" }}>{errors.password}</AppText> */}
    //         {/* <ErrorMessage error={errors.password} /> */}
    //         <ErrorMessage error={errors.password} visible={touched.password} />
    //         <AppButton
    //           title="Login"
    //           //   onPress={() => console.log(email, password)}
    //           // on handleSubmit - onSubmit() will get called
    //           onPress={handleSubmit}
    //         />
    //       </>
    //     )}
    //   </Formik>
    //   {/* Advantage of Formik -
    //  It handles our states
    //  We dont need to make state variables using useState(suppose we have 5 inputs then without formik we will need
    //      to make 5 states) */}
    // </Screen>

    // There are some props we are repeating for all inputs - onChangeText, onBlur or ErrorMessage
    // We can make one separate component to avoid repetation
    // <Screen style={styles.container}>
    //   <Image style={styles.logo} source={require("../assets/logo-red.png")} />
    //   <Formik
    //     initialValues={{ email: "", password: "" }}
    //     onSubmit={(values) => console.log(values)}
    //     validationSchema={validationSchema}
    //   >
    //     {() => (
    //       <>
    //         <AppFormField
    //           name="email"
    //           autoCapitalize="none"
    //           autoCorrect={false}
    //           icon="email"
    //           placeholder="Email"
    //           keyboardType="email-address"
    //           textContentType="emailAddress"
    //         />
    //         <AppFormField
    //           name="password"
    //           autoCapitalize="none"
    //           autoCorrect={false}
    //           icon="lock"
    //           placeholder="Password"
    //           secureTextEntry
    //           textContentType="password"
    //         />
    //         <SubmitButton title="Login" />
    //       </>
    //     )}
    //   </Formik>
    // </Screen>

    // Refractoring
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

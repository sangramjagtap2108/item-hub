import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import usersApi from "../api/users";
import ErrorMessage from "../components/forms/ErrorMessage";
import authApi from "../api/auth";
import AuthContext from "../auth/context";
import AuthStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState("");
  const authContext = useContext(AuthContext);

  const handleSubmit = async (userInfo) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      // Error like user already exists
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }

    // Login after registration
    const results = await authApi.login(userInfo.email, userInfo.password);
    // if (!results.ok) return setLoginFailed(true);

    // setLoginFailed(false);
    const user = jwtDecode(results.data);
    authContext.setUser(user);
    AuthStorage.storeToken(results.data);
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;

import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../Text/Text";

function ErrorMessage({ error, visible }) {
  // visible - only for Approach 2 else - if (!error) return null;
  if (!visible || !error) return null; //   if not touched or error free
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;

// This is one of the approach to use styles in separate file else use in same file

import React from "react";
// imrn
import { Text } from "react-native";
import styles from "./styles";

function AppText(props) {
  // content of the AppText will be stored in children prop
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

export default AppText;

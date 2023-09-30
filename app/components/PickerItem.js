import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText/AppText";
import { TouchableOpacity } from "react-native";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});

export default PickerItem;

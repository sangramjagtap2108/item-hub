import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./Text/Text";
import { TouchableOpacity } from "react-native";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});

export default PickerItem;

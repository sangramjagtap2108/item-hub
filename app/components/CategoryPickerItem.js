import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import AppText from "./Text/Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
    alignItems: "center",
    // width -
    // 1. It will divide the 3 columns equally between the screen
    // 2.suppose one item has long label(Movies & Music) then width will handle it
    width: "33%",
  },
  label: {
    marginTop: 5,
    // For Movies & Music - Music is at left side, to align it at center
    textAlign: "center",
  },
});

export default CategoryPickerItem;

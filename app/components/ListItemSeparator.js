import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function ListItemSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});

export default ListItemSeparator;

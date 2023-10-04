import React from "react";
import colors from "../config/colors";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          color={colors.white}
          name="plus-circle"
          size={30}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems and justifyContent is for plus icon
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 35,
    borderWidth: 10,
    // bottom - shifts component upward
    bottom: 25,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});

export default NewListingButton;

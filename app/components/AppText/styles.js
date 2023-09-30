import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  //   text: {
  //     fontSize: 18,
  //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //     // This Platform.OS approach is suitable for one property but for multiple props we can use select method
  //   }

  text: {
    color: "black",
    // select returns object so we can use spread operator
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;

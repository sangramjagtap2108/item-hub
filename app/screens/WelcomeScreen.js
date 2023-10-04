// rsf
import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import AppButton from "../components/Button";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      // To make bg blury
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      {/* <View style={styles.loginButton} /> */}
      {/* AppButton is very close to the edges of the screen, so we will add it in container and give padding */}
      {/* imp to set width as 100% to View - View takes size of the content */}
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        {/* <View style={styles.registerButton} /> */}
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

// rnss
const styles = StyleSheet.create({
  background: {
    // takes entire screen
    flex: 1,
    // justifyContent aligns buttons at end
    // why justifyContent and not alignItems?
    // justifyContent is for primary axis and in react native vertical is default axis
    justifyContent: "flex-end",
    // for logo container
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 70,
  },
  logo: {
    // justify content is flex-end so logo will go to the end. thats why we are setting position to absolute
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

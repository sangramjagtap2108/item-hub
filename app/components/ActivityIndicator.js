import React from "react";
// Lottie - provides animation designs
import AnimatedLottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <AnimatedLottieView
      autoPlay
      loop
      // we can get source from - lottiefiles
      source={require("../assets/animations/loader.json")}
    />
  );
}

export default ActivityIndicator;

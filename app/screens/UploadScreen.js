import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import AppText from "../components/Text/Text";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import AnimatedLottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <AppText>{progress * 100}%</AppText> */}
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <AnimatedLottieView
            // animation should start immediately
            autoPlay
            // we want to show animation only once
            loop={false}
            // this will run once animation is completed
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;

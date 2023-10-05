import React from "react";
import { Modal, View, StyleSheet } from "react-native";
import AppText from "../components/Text/Text";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {/* <AppText>{progress * 100}%</AppText> */}
        <Progress.Bar color={colors.primary} progress={progress} width={200} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;

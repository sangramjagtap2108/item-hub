import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./Text/Text";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { Modal } from "react-native";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  //   console.log(netInfo);
  //   if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
  //     return (
  //       <Modal style={styles.container}>
  //         <AppText style={styles.text}>No Internet Connection</AppText>
  //       </Modal>
  //     );
  //   }

  <Modal
    // animationType="slide"
    // transparent={true}
    visible={
      netInfo.type !== "unknown" && netInfo.isInternetReachable === false
    }
    // onRequestClose={() => {
    //   closeModal();
    // }}
  >
    {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
        <Text>This is a Modal</Text>
        <TouchableOpacity onPress={() => closeModal()}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View> */}
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  </Modal>;

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    justifyContent: "center",
    height: 50,
    width: "100%",
    // want it at the top - position, zIndex
    position: "absolute",
    zIndex: 1,
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;

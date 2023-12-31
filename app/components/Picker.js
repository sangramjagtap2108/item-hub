// Picker component is deprecated in expo/react-native
// Custom picker component

import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Platform,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./Text/Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function Picker({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  onSelectItem,
  selectedItem,
  width = "100%",
  // Default
  PickerItemComponent = PickerItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          {/* <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText> */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            // FlatList has a property called numColumns to divide flatlist values column wise
            numColumns={numberOfColumns}
            // numColumns={3} - we are not using this approach as this makes property static, if we have 2 pickers
            // in which only one needs numColumns prop
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    // we want chevron-down icon to the rightmost part,hence we are allocating all the remaining space to text
    flex: 1,
  },
});

export default Picker;

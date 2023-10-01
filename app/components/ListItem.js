import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

// npx expo install react-native-gesture-handler
// gesture-handler has a Swipeable component
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  const [showShevrons, setShowShevrons] = useState(true);

  return (
    // renderRightActions - will render to the right
    <Swipeable renderRightActions={renderRightActions}>
      {/* underlayColor - when we touch the component */}
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {/* Few listitems have icons and icons have multiple props so instead we will use single prop
          IconComponent */}
          {IconComponent}
          {/* few listitems dont have image so to handle that, we will only use Image component if image prop is present */}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            {/* Number of lines - to handle long text */}
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {/* subTitle is optional */}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={1}>
                {subTitle}
              </AppText>
            )}
          </View>
          {/* {showShevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.medium}
            />
          )} */}
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    // below for chevron-right - primary axis is horizontal(flexDirection: "row") and we want icon vertically
    // center so along secondary axis
    alignItems: "center",
    // default is vertical
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    // if subTitle is not present below will render title at the center
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    // marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "600",
  },
});

import React from "react";
// import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./Text/Text";
import { TouchableWithoutFeedback } from "react-native";

import { View, StyleSheet } from "react-native";
// importing Image component from expo image cache as that component supports caching i.e has offline support
import { Image } from "react-native-expo-image-cache";
// Above Image component needs expo-blur package to be installed that supports on blur event

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image} /> */}
        {/* <Image style={styles.image} source={{ uri: imageUrl }} /> */}
        {/* expo image */}
        {/* This takes some time to load image, here we can use progressive loading concept. We will have thumbnail
        as a placeholder initially.
        This thumbnail is getting generated at server side everytime we make post request to server and getting 
        added to the image object */}
        {/* we will see thumbnail with blur effect */}
        <Image
          style={styles.image}
          // thumbnail has black tint default
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    // We dont see borderRadius for upper 2 corners as image is hiding that
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "bold",
  },
});

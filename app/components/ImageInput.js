import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";
// import TouchableWithoutFeedback from "react-native" and not from "react-native-gesture-handler"
import { TouchableWithoutFeedback } from "react-native";

function ImageInput({ imageURI, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted)
      alert("You need to enable permission to access the library");
  };

  const handlePress = () => {
    if (!imageURI) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // mediaTypes - only images not videos
        // quality - between 0-1
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      {/* We need to use View inside Touchable as we have 2 child components - MaterialCommunityIcons and Image */}
      <View style={styles.container}>
        {!imageURI && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageURI && (
          // Image component doesn't support onPress
          <Image source={{ uri: imageURI }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    // overflow - container has border radius but image is hiding it so to display border radius
    overflow: "hidden",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;

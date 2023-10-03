import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {/* If image is already present and onChangeImage is getting triggered then we are removing item */}
      {imageUris.map((imageUri) => (
        <View key={imageUri} style={styles.image}>
          <ImageInput
            imageURI={imageUri}
            onChangeImage={() => onRemoveImage(imageUri)}
          />
        </View>
      ))}
      {/* we will always have ImageInput for adding new image */}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;

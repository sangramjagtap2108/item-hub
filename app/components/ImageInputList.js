import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    // ScrollView - We need a horizontal scroll bar incase of multiple images
    // default is vertical
    // currently we need to scroll an app, we can scroll to end using scrollToEnd property
    // scrollToEnd - will scroll to right incase of horizontal and to bottom incase of vertical
    // To apply scrollToEnd prop to ScrollView we will use useRef hook, it gives reference of the component

    // ScrollView always added inside View Component, as scrollView takes all the available VideoColorSpace. View
    // only takes space of the available content.
    // In this case, it is working without View

    <ScrollView
      //   style={{ backgroundColor: "yellow" }}
      ref={scrollView}
      horizontal
      //   current - this ScrollView component
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
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
    </ScrollView>
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

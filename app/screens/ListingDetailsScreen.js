import React from "react";
import { View, StyleSheet } from "react-native";
// import { View, StyleSheet, Image } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../components/Text/Text";
import ListItem from "../components/ListItem";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const listings = route.params;

  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("../assets/jacket.jpg")}
    //   ></Card>
    // </View>

    // <GestureHandlerRootView>
    //   <View style={styles.card}>
    //     <Image style={styles.image} source={require("../assets/jacket.jpg")} />
    //     <View style={styles.detailsContainer}>
    //       <AppText style={styles.title}>Red jacket for sale</AppText>
    //       <AppText style={styles.subTitle}>$100</AppText>
    //       <View style={styles.userContainer}>
    //         <ListItem
    //           image={require("../assets/mosh.jpg")}
    //           title="Mosh Hamedani"
    //           subTitle="5 Listings"
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </GestureHandlerRootView>

    <GestureHandlerRootView>
      <View style={styles.card}>
        {/* <Image style={styles.image} source={listings.image} /> */}
        <Image
          style={styles.image}
          preview={{ uri: listings.images[0].thumbnailUrl }}
          tint="light"
          uri={listings.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listings.title}</AppText>
          <AppText style={styles.subTitle}>{listings.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

export default ListingDetailsScreen;

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
  userContainer: {
    marginTop: 40,
  },
});

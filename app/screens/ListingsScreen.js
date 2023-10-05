import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

// const listings = [
//   {
//     id: 1,
//     title: "Red jacket for sale",
//     price: 100,
//     image: require("../assets/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  // cant use async with useEffect
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <GestureHandlerRootView>
      <Screen style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              // image={item.image}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTINGS_DETAILS, item)}
            />
          )}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

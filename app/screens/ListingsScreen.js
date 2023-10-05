import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../components/Text/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";

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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    // Handling errors - for testing, close the backend server
    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setListings(response.data);
  };

  // cant use async with useEffect
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <GestureHandlerRootView>
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={loadListings} />
          </>
          // If server is not running - we will get error, now start the server and press retry
        )}
        {/* ActivityIndicator - for animation */}
        {/* import { ActivityIndicator, FlatList, StyleSheet } from "react-native"; */}
        {/* <ActivityIndicator animating={loading} size="large" /> */}

        {/* import ActivityIndicator from "../components/ActivityIndicator"; */}
        {/* <ActivityIndicator visible={loading} /> */}
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

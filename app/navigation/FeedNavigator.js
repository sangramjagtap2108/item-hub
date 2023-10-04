import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  // <Stack.Navigator mode="modal"> - not working on android
  <Stack.Navigator>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

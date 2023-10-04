import React from "react";
import {
  createNativeStackNavigator,
  //   TransitionPresets,
} from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  // <Stack.Navigator mode="modal"> - not working on android
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

// import React from "react";
// import {
//   createNativeStackNavigator,
//   //   TransitionPresets,
// } from "@react-navigation/native-stack";
// import { TransitionPresets } from "@react-navigation/stack";

// import ListingsScreen from "../screens/ListingsScreen";
// import ListingDetailsScreen from "../screens/ListingDetailsScreen";
// // import AppText from "../components/Text";

// const Stack = createNativeStackNavigator();

// const FeedNavigator = () => (
//   <Stack.Navigator mode="modal">
//     <Stack.Screen
//       options={{
//         headerShown: true,
//         headerTitleAlign: "center",
//       }}
//       name="Marketplace"
//       component={ListingsScreen}
//     />
//     <Stack.Screen
//       name="ListingDetails"
//       component={ListingDetailsScreen}
//       options={{
//         //   headerShown: false,
//         //   gestureEnabled: true,
//         ...TransitionPresets.ModalSlideFromBottomIOS,
//       }}
//     />
//   </Stack.Navigator>
// );

// export default FeedNavigator;

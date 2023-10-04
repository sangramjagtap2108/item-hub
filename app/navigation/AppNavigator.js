import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

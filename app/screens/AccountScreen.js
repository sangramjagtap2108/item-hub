import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthContext from "../auth/context";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    target: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  return (
    <GestureHandlerRootView>
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title={user.name}
            subTitle={user.email}
            image={require("../assets/mosh.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparatorComponent}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                // incase of messages, target=messages so on click messages screen will be rendered
                onPress={() => navigation.navigate(item.target)}
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={() => setUser(null)}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;

import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
// console.log(Constants);

const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description:
      "I am interested in buying this item. Is this still available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I am interested in buying this item. Is this still available?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen(props) {
  // why useState - when element gets deleted, component should re render, if we update the array directly,
  // it will not re render
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
  };

  return (
    // SafeAreaView only works with IOS, so for android we need to add paddingTop
    // For every screen we need to repeate the steps of SafeAreaView, paddingTop, expo-constants
    // Instead we can create the separate component for it
    // <SafeAreaView style={styles.screen}>
    //   {/* Flatlist takes 3 args */}
    //   <FlatList
    //     // data to render
    //     data={messages}
    //     // key that uniquely identifies the data
    //     keyExtractor={(message) => message.id.toString()}
    //     // render item
    //     // renderItem takes arg which has 3 args - item and 2 more
    //     renderItem={({ item }) => (
    //       <ListItem
    //         image={item.image}
    //         title={item.title}
    //         subTitle={item.description}
    //       />
    //     )}
    //   />
    // </SafeAreaView>

    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Message Selectec", item)}
            // renderRightActions={ListItemDeleteAction}
            // if we want to pass a prop -
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        // We need to add separation between list items. We can use padding but then the last element will have
        // padding after it
        // Instead we can use FlatList prop - ItemSeparatorComponent
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Mosh Hamedani",
              description:
                "I am interested in buying this item. Is this still available?",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 2,
              title: "Mosh Hamedani",
              description:
                "I am interested in buying this item. Is this still available?",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//     // this can be done using expo-constants.Expo-constants gives info about device's properties
//     paddingTop: Constants.statusBarHeight,
//   },
// });

export default MessagesScreen;

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  // TouchableNativeFeedback - only for android and only works with View
  useWindowDimensions,
  TextInput,
  Switch,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  // const handlePress = () => {
  //   console.log("Text Pressed");
  // }

  // set orientation as default for both orientation in App.json
  // gives orientation
  // console.log(useDeviceOrientation());
  // gives dimensions
  // console.log(useWindowDimensions());

  // const orientation = useDeviceOrientation();
  // const orientation = useDeviceOrientation();

  // return (
  // <SafeAreaView style={{ backgroundColor: "orange" }}>
  // <SafeAreaView style={containerStyle}>
  //  we can also add multiple styles. In this case second one will take priority if same props(bgcolor) are present
  // <SafeAreaView style={[styles.container, containerStyle]}>
  //   {/* <SafeAreaView style={styles.container}> */}
  //   {/* Props - */}
  //   {/* numberOfLines - truncate lines to mentioned number
  //   onPress - to treat text as a link */}
  //   <Text numberOfLines={1} onPress={() => console.log("Text Pressed")}>
  //     Hello World! This text is very long. Text has multiple props like
  //     numberOfLines and onPress
  //   </Text>
  //   {/* <Text numberOfLines={1} onPress={handlePress}>Hello World! This text is very long. Text has multiple props like numberOfLines and onPress</Text> */}
  //   {/* <Image source = {require("./assets/favicon.png")}/> */}
  //   {/* require function returns a number referenced to the image */}
  //   {/* Network Images -
  //   For Network images, we dont use require instead use {} and uri for the url. Also need to mention dimensions */}
  //   {/* By using touchable components, we can make the image touchable, can be tapped */}
  //   {/* TouchableWithoutFeedback - doesnt make any changes to image
  //   TouchableOpacity - reduces the opacity
  //   TouchableHighlight - highlight the image */}
  //   {/* <TouchableHighlight onPress={() => console.log("Image Pressed")}>
  //     <Image
  //       // to make image blur
  //       // blurRadius={10}
  //       // for fade effect
  //       // fadeDuration={1000}
  //       source={{
  //         width: 200,
  //         height: 300,
  //         uri: "https://picsum.photos/200/300",
  //       }}
  //     />
  //   </TouchableHighlight> */}
  //   {/* <Button
  //     color="orange"
  //     title="Click Me"
  //     // onPress={() => console.log("Button Presses")}
  //     // onPress={() => alert("Button Pressed")}
  //     // we can also customized alert using Alert api
  //     onPress={
  //       () =>
  //         Alert.alert("My title", "My message", [
  //           { text: "Yes", onPress: () => console.log("Yes") },
  //           { text: "No", onPress: () => console.log("No") },
  //           // {use ctrl+space to check all the properties}
  //         ])
  //       // prompt only works for ios
  //       // prompt takes a callback function which will get the value entered in a prompt after clicking ok
  //       // Alert.prompt("My title", "My message", (text) => console.log(text))
  //     }
  //   /> */}
  //   <StatusBar style="auto" />
  // </SafeAreaView>

  // <SafeAreaView style={styles.container}>
  //   <View
  //     // this style values are DIP(Density Independent Pixels)
  //     // DIP makes sure that dimensions look same on all screens depending on the scale factor
  //     // Physical pixels = DIP * Scale factor
  //     style={{
  //       backgroundColor: "dodgerblue",
  //       width: "100%",
  //       // height: "30%",
  //       height: orientation === "landscape" ? "100%" : "30%",
  //     }}
  //   ></View>
  // </SafeAreaView>

  // <SafeAreaView>
  //   <View
  //     style={{
  //       backgroundColor: "#fff",
  //       flex: 1,
  //       // bydefault react narive aligns items vertically in a container
  //       // for horizontal - row
  //       // Press ctrl + space to know all the options
  //       flexDirection: "row",
  //       // flexDirection: "row-reverse",
  //       // justifyContent aligns items along the main axis(if row then horizontal else vertical)
  //       justifyContent: "center",
  //       // justifyContent: "flex-end",
  //       // justifyContent: "flex-start",
  //       // justifyContent: "space-around",
  //       // alignItems aligns items along the secondary axis
  //       // alignItems: "center",
  //       // alignContent works only if we have wrapping(flexWrap)
  //       // alignContent: "center",
  //       // flexwrap - when elements overflows
  //       // flexWrap: "wrap",
  //     }}
  //   >
  //     <View
  //       style={{
  //         backgroundColor: "dodgerblue",
  //         // flex: 2,
  //         // flex: 1,
  //         width: 100,
  //         height: 100,
  //         // alignSelf: "baseline",
  //         // flexBasis is similar to width/height wrt to the primary axis, if horizontal then width else height
  //       }}
  //     />
  //     <View
  //       style={{
  //         backgroundColor: "gold",
  //         // flex: 1,
  //         width: 100,
  //         height: 100,
  //       }}
  //     />
  //     <View
  //       style={{
  //         backgroundColor: "tomato",
  //         // flex: 1,
  //         width: 100,
  //         height: 100,
  //         // relative positioning - relative to itself
  //         // default position : "relative"
  //         // top: -20,
  //         // top: 20,
  //         // bottom,left,right
  //         // if position: absolute - then element will move wrt to parent and other elements will come close
  //         // to each other
  //         position: "absolute",
  //         left: 10,
  //       }}
  //     />
  //     {/* <View
  //       style={{
  //         backgroundColor: "grey",
  //         width: 100,
  //         height: 100,
  //       }}
  //     />
  //     <View
  //       style={{
  //         backgroundColor: "green",
  //         width: 100,
  //         height: 100,
  //       }}
  //     /> */}
  //   </View>
  // </SafeAreaView>
  // );

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   {/* <View
    //     style={{
    //       backgroundColor: "dodgerblue",
    //       width: 100,
    //       height: 100,
    //       // borderColor: "royalblue",
    //       // borderWidth: 10,
    //       // borderRadius: 30,
    //       // gives circle
    //       // borderRadius: 50,
    //       padding: 20,
    //     }}
    //   >
    //     <View
    //       style={{
    //         backgroundColor: "gold",
    //         width: 50,
    //         height: 50,
    //       }}
    //     />
    //   </View>
    //   <View
    //     style={{
    //       backgroundColor: "red",
    //       width: 100,
    //       height: 100,
    //       margin: 20,
    //     }}
    //   /> */}
    //   {/* <Text
    //     style={{
    //       fontSize: 30,
    //       textTransform: "capitalize",
    //       textAlign: "justify",
    //       lineHeight: 30,
    //       // font related props are not available to other components(View) so to make sure that our all texts always
    //       // look the same we use encapsulating styles(encapsulate the style in custom text component(AppText))
    //     }}
    //   >
    //     I Love React Native !!
    //   </Text> */}

    //   {/* <AppText>I Love React Native !!</AppText>
    //   <MaterialCommunityIcons name="email" size={60} color="dodgerblue" /> */}

    //   {/* <AppButton title="Login" onPress={() => console.log("Touched")} /> */}

    // </View>

    //   //Shadows -
    //   // On Android, there is no more functionalities related to shadows. We have elevation
    //   // On IOS, we can have shadow props

    // Card
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    </View>
  );

  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ];
  const [category, setCategory] = useState(categories[0]);

  // Input Components
  // return (
  //   <Screen>
  {
    /* <Text>{firstName}</Text>
  //     <TextInput
  //       // maxLength={5}
  //       // keyboardType="numeric"
  //       // clearButtonMode - only for ios
  //       // clearButtonMode="always"
  //       // for passwords
  //       // secureTextEntry={true}
  //       // or (for boolean props - it implicitely takes true)
  //       // secureTextEntry
  //       onChangeText={(text) => setFirstName(text)}
  //       placeholder="First Name"
  //       style={{
  //         borderBottomColor: "#ccc",
  //         borderBottomWidth: 1,
  //       }}
  //     /> */
  }
  {
    /* <AppTextInput placeholder="Username" icon="email" /> */
  }
  {
    /* import Switch from react-native and not from react native gesture handler */
  }
  {
    /* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */
  }

  {
    /* <AppPicker
        onSelectItem={(item) => setCategory(item)}
        selectedItem={category}
        icon="apps"
        placeholder="Component"
        items={categories}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  ); */
  }

  // ******* Project - DoneWithIt starts

  // return (
  // <WelcomeScreen />
  // <ViewImageScreen />
  // <ListingDetailsScreen />
  // <GestureHandlerRootView>
  //   <MessagesScreen />
  // </GestureHandlerRootView>
  // <Screen>
  //   {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
  //   <GestureHandlerRootView>
  //     <ListItem
  //       title="My Title"
  //       subTitle="My SubTitle"
  //       IconComponent={<Icon name="email" />}
  //     />
  //   </GestureHandlerRootView>
  // </Screen>
  // <GestureHandlerRootView>
  //   <AccountScreen />
  //   <ListingsScreen />
  // </GestureHandlerRootView>
  // <LoginScreen />
  // <RegisterScreen />
  // <ListingEditScreen />
  // );

  // ******* Project - DoneWithIt ends
}

// const containerStyle = { backgroundColor: "orange" };

// The preperties mentioned below are not any css props but they are js props
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//     // Platform is used for platform specific code
//     // In ios - content in view comes below status bar bydefault so no need to handle. But in android it needs
//     // to be handled manually
//     // paddingTop: Platform.OS === "android" ? 50 : 0,
//     // StatusBar.currentHeight - dynamic
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

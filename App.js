// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   TouchableHighlight,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Button,
//   Alert,
//   Platform,
//   // TouchableNativeFeedback - only for android and only works with View
//   useWindowDimensions,
//   TextInput,
//   Switch,
// } from "react-native";
// import { useDeviceOrientation } from "@react-native-community/hooks";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/Text/Text";
// import AppButton from "./app/components/Button";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import Screen from "./app/components/Screen";
// import Icon from "./app/components/Icon";
// import ListItem from "./app/components/ListItem";
// import { useState } from "react";
// import AppTextInput from "./app/components/TextInput";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import AppPicker from "./app/components/Picker";
// import LoginScreen from "./app/screens/LoginScreen";
// import RegisterScreen from "./app/screens/RegisterScreen";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

// export default function App() {
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

// return (
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
//   <View
//     style={{
//       backgroundColor: "#f8f4f4",
//       padding: 20,
//       paddingTop: 100,
//     }}
//   >
//     <Card
//       title="Red jacket for sale"
//       subTitle="$100"
//       image={require("./app/assets/jacket.jpg")}
//     ></Card>
//   </View>
// );

// const [firstName, setFirstName] = useState("");
// const [isNew, setIsNew] = useState(false);
// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];
// const [category, setCategory] = useState(categories[0]);

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
//   {/* <AccountScreen /> */}
//   {/* <ListingsScreen /> */}
// </GestureHandlerRootView>
// <LoginScreen />
// <RegisterScreen />
// <ListingEditScreen />
// );

// ******* Project - DoneWithIt ends
// }

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

//  ******************** React Native Course 2 **********************
// import { useEffect } from "react";
// import * as ImagePicker from "expo-image-picker";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";
// import * as Permissions from "expo-permissions";

// export default function App() {
//   // const [imageURI, setImageURI] = useState();
//   const [imageURIS, setImageURIS] = useState([]);

{
  /* Requesting permissions - Using expo-image-picker (npm install expo-image-picker)
    After loading app we need to give pop up for requesting permissions
    We can use componentDidMount but function components don't support it
    Instead we can use useEffect hook */
}
{
  /* useEffect(() =>{}) - will run everytime component is rendered
    useEffect(() =>{},[a,b,c]) - will run everytime a or b or c is rendered
    useEffect(() =>{},[]) - will run only once */
}

// const requestPermission = async () => {
//   // On opening an app we will get dialog box for permission and options allow or deny
//   // We will get dialog box only intially even if we deny or allow
//   // If allow - then device will remember that and will not ask again after
//   // deny - it will give alert - You need to enable permission to access the library
//   // for deny - for second time also it will ask directly alert - You need to enable permission to access the library
//   // and will not ask for intial dialog
//   const result = await ImagePicker.requestCameraPermissionsAsync();
//   if (!result.granted)
//     alert("You need to enable permission to access the library");

//   // Another way - using permissions module - npm install expo-permissions(check whether compatible with expo)
//   // Below will ask 2 dialogs and if any one id declined then granted will be false
//   // const result = await Permissions.askAsync(
//   //   Permissions.CAMERA,
//   //   Permissions.LOCATION_FOREGROUND
//   // );
//   // if (!result.granted)
//   //   alert("You need to enable permission to access the library");
// };

// useEffect(() => {
//   // async function, returns promise.
//   // useEffect cant work with promises so we need to make separate functions
//   requestPermission();
// }, []);

// const selectImage = async () => {
//   try {
//     // Accessing the library i.e selecting images from device
//     // below will launch window to select image
//     const result = await ImagePicker.launchImageLibraryAsync();
//     // we are using 2 properties - canceled and uri
//     if (!result.canceled) {
//       // result.url - was not working
//       // Always troubleshoot - print result and check objects
//       setImageURI(result.assets[0].uri);
//     }
//   } catch (error) {
//     console.log("Error reading an image", error);
//   }
// };

// const handleAdd = (uri) => {
//   setImageURIS([...imageURIS, uri]);
// };

// const handleRemove = (uri) => {
//   setImageURIS(imageURIS.filter((imageUri) => imageUri !== uri));
// };

// return (
//   // <Screen>
//   //   {/* <Button title="Select Image" onPress={selectImage} /> */}
//   //   {/* <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} /> */}
//   //   <ImageInput
//   //     imageURI={imageURI}
//   //     onChangeImage={(uri) => setImageURI(uri)}
//   //   />
//   // </Screen>

//   // <Screen>
//   //   <ImageInputList
//   //     imageUris={imageURIS}
//   //     // onAddImage={uri => handleAdd(uri)}
//   //     // Above is same as - onAddImage={handleAdd}
//   //     onAddImage={handleAdd}
//   //     onRemoveImage={handleRemove}
//   //   />
//   // </Screen>

//   <ListingEditScreen />
// );

// }

// Section 2 - Navigation
// Navigators -
// Stack Navigator
// Tab Navigator
// Drawer Navigator
import Screen from "./app/components/Screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import Button from "./app/components/Button";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

// // React navigations provides navigation prop only for Stack.Screen components. Child of Tweets will not have
// // access of navigation prop instead we can use useNavigation
// const Tweets = ({ navigation }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Button
//       title="View Tweet"
//       // sending params
//       onPress={() => navigation.navigate("TweetDetails", { id: "2" })}
//       // Diff between navigate and push
//       // navigate - we have only one instace of a component in stack
//       // push - we can have multiple instaces of a component in stack
//       // onPress={() => navigation.navigate("Tweets")}
//       // onPress={() => navigation.push("Tweets")}
//     />
//     {/* <Link /> */}
//   </Screen>
// );

// // similar to navigation we have route prop for Stack.Screen components, and useRoute for other components
// const TweetDetails = ({ route }) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// );

// // Child of Tweets
// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
//   );
// };

// // Stack Navigation
// const Stack = createNativeStackNavigator();
// const StackNavigator = () => (
//   // initialRouteName will be shown initially else the first screen
//   // name would be used as header of the screen
//   // <Stack.Navigator initialRouteName="TweetDetails">
//   //   <Stack.Screen name="Tweets" component={Tweets} />
//   //   <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   // </Stack.Navigator>
//   <Stack.Navigator
//     // customizing headers
//     // Below is for All components, we can overwrite it in individual components
//     screenOptions={{
//       headerStyle: { backgroundColor: "dodgerblue" },
//       headerTintColor: "white",
//     }}
//   >
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       // customizing headers
//       // Below is for Tweets component
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white",
//         // headerShown: false,
//       }}
//     />
//     {/* Setting titles/headers - using options */}
//     <Stack.Screen
//       name="TweetDetails"
//       component={TweetDetails}
//       // options={{
//       //   title: "Tweet Details",
//       // }}
//       // Dynamic -
//       // navigation provides route prop
//       options={({ route }) => ({
//         title: route.params.id,
//       })}
//     />
//   </Stack.Navigator>
// );

// // use () instead of {} for components
// const Account = () => (
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// );

// // Tab Navigation
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveBackgroundColor: "tomato",
//       tabBarActiveTintColor: "white",
//       tabBarInactiveBackgroundColor: "#eee",
//       tabBarInactiveTintColor: "black",
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       // currently we are using tab navigator and one of the navigators is tweet. If we want to go from tweets->
//       // tweetdetails, we cant with the current implementation(component={Tweets}). We need to use stack navigator
//       // instead
//       // component={Tweets}
//       // Nesting navigators
//       component={StackNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           // <MaterialCommunityIcons name="home" size={25} color="white" />
//           // we can also use default size and color provided by react navigation
//           // default color is decided using the screenOptions
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//       }}
//     />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// );

export default function App() {
  const [user, setUser] = useState();
  // tells if app is ready
  // const [isReady, setIsReady] = useState();

  const restoreUser = async () => {
    const user = await AuthStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  // AppLoading compoent will be displayed until app gets loaded
  // if (!isReady)
  //   // startAsync - this will execute when app starts
  //   // onFinish - will get raised when execution of the function is finished
  //   return (
  //     <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
  //   );

  return (
    // <NavigationContainer theme={navigationTheme}>
    //   {/* <StackNavigator /> */}
    //   {/* <TabNavigator /> */}

    //   {/* Project code starts */}

    //   {/* <AuthNavigator /> */}
    //   {/* <AppNavigator /> */}

    //   {/* Project code ends */}
    // </NavigationContainer>

    // user,setUser will be available to all components
    // setUser is needed because we are setting user value in LoginScreen
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* <AppNavigator /> */}
        {/* <AuthNavigator /> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// import React from "react";
// import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
// import { Button, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function App() {
// // to get network details of the device -
// // NetInfo.fetch() - returns promise, we can either await or use then
// NetInfo.fetch().then((netInfo) => console.log(netInfo));
// // netInfo has -
// // isConnected - tells about network connection
// // if isConnected is true that does not mean that internet is accessible, we should always check
// // isInternetReachable - initially null as NetInfo is trying to reach to the internet
// // with fetch method we can get info about internet connection only once initially which is not very reliable
// // that is why we use addEventListener.
// // We can send function to addEventListener and that function will get called everytime there change in
// // network status
// // This gets called twice unlike fetch. Initially when isInternetReachable=null and secondly when
// // isInternetReachable=true
// // Below function will get called at the time of componentDidMount
// const unsubscribe = NetInfo.addEventListener((netInfo) =>
//   console.log(netInfo)
// );
// // at the time of componentWillUnmount -
// // it is required to unsubscribe else addEventListener will keep calling
// unsubscribe();
// We can use useNetInfo hook that would do the above work
// const netInfo = useNetInfo();
// return netInfo.isInternetReachable ? <View></View> : <View></View>
// Caching
// When we call the api we want to store the successful api data locally on the cache so if the network goes down
// we can use the data in the cache
// We have 3 options -
// 1.AsyncStorage - like a local storage in web browser, we store key value pairs, values are strings and they
// are not encrypted so we should not store sensitive data and this has limited storage
// 2.SecureStore - api build by the expo, again limited space, should store onlt limited data and secure data
// 3.SQLite - when we want to query data with sql queries
// With all these options data is available with app restarts but it gets wiped out if user uninstalls the app

// AsyncStorage
// const demo = async () => {
//   try {
//     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
//     const value = await AsyncStorage.getItem("person");
//     JSON.parse(value);
//     console.log(value);
//   } catch (error) {
//     console.log(error);
//   }
// };

// demo();

// For our project - we dont have to query on the listings data(array of objects) obtained from the server and
// we will use secureStore only incase of very limited secure data. So we will use AsyncStorage
// On Android - AsyncStorage uses sqlite under the hood
// On ios - uses dictionary/files
// We should not use AsyncStorage directly instead we should use it with cache layer
// Cache layer -
// automatically serialize/deserialize (stringify, parse)
// applies timestamp to determine expired items and then clean up the async storage
// With cache layer - it provides one place where oue code is present and avoids repetation of code at
// multiple places
// }

//Section - Authentication and authorization

// Redux - For sharing large objects that change frequently
// React Context - For sharing small objects that don't change often, for ex. user login details, once we log in
// it will not

// export default function App() {
//   return <></>;
// }

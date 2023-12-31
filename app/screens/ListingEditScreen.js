import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
// npm install expo-location
import * as Location from "expo-location";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

import AppFormPicker from "../components/forms/FormPicker";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select atleast one image"),
  // As image would be empty array initially so it will never be null and required() will not work. Instead we will
  // use min(1)
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "red",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "green" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "blue" },
  { label: "Games", value: 4, icon: "cards-outline", backgroundColor: "red" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "green",
  },
  {
    label: "Sports",
    value: 6,
    icon: "basketball",
    backgroundColor: "blue",
  },
  {
    label: "Movies & Music",
    value: 7,
    icon: "music",
    backgroundColor: "red",
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-variant",
    backgroundColor: "green",
  },
  { label: "Others", value: 9, icon: "application", backgroundColor: "blue" },
];

function ListingEditScreen() {
  // const [location, setLocation] = useState();

  // // getting the user's location - latitude and longitude
  // const getLocation = async () => {
  //   // requesting for location on app
  //   const { granted } = await Location.requestForegroundPermissionsAsync();
  //   if (!granted) return;
  //   // const result = await Location.getLastKnownPositionAsync();
  //   // we will need - result.coords.latitude and result.coords.longitude
  //   // destructuring

  //   const {
  //     coords: { latitude, longitude },
  //   } = await Location.getLastKnownPositionAsync();
  //   setLocation({ latitude, longitude });

  //   // We can also use below function
  //   // const currentLocation = await Location.getCurrentPositionAsync({});
  //   // console.log(currentLocation);
  //   // setLocation(currentLocation);
  // };

  // useEffect(() => {
  //   getLocation();
  // }, []);

  // Custom hook
  // const location = useLocation();

  const location = { latitude: 37.3360781, longitude: -121.8877472 };
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // to reset form - Formik onSubmit has 2 methods - values and formikBag
  //formikBag is an object that has property resetForm and methods starting with set

  const handleSubmit = async (listing, { resetForm }) => {
    // if we dont set progress = 0, for multiple submits it shows weird progress
    // before every request to server we are setting it to 0
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => {
        setProgress(progress);
      }
    );
    // setUploadVisible(false);

    if (!result.ok) {
      setUploadVisible(false);
      alert("Could not save the listing");
      return;
    }
    // alert("Success");

    resetForm();
    // on reset - image and picker gets reset but title and price did not.Because setFieldValue and values objects
    // were missing in formfield but they are present in formpicker
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          // Even though price is number
          price: "",
          description: "",
          // category - object
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        // location - {"latitude": 37.3360781, "longitude": -121.8877472}
        // the coordinates point to a location in San Jose, California, USA.
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;

import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

import AppFormPicker from "../components/forms/FormPicker";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
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
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          // Even though price is number
          price: "",
          description: "",
          // category - object
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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

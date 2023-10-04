import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

// DefaultTheme - contains default theme for navigation, we are overwriting few props for better view
export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

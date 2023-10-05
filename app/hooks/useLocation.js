import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    console.log("In getLocation");
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      // const {
      //   coords: { latitude, longitude },
      // } = await Location.getLastKnownPositionAsync();
      // setLocation({ latitude, longitude });
      // We can also use below function
      const currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      // setLocation(currentLocation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log("Location -", location);
  return location;
};

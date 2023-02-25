import * as React from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import AuthStack from "./navigation/AuthStack";
import NavigationBar from "./navigation/NavigationBar";
import { useFonts } from "expo-font";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    OpenSansMedium: require("./assets/fonts/OpenSans-Medium.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <NavigationBar />
    </NavigationContainer>
  );
};

export default App;

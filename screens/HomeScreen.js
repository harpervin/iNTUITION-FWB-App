import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, SafeAreaView, Text} from "react-native";

const HomeScreen = () => {
    return(
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
};

export default HomeScreen;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import { CustomButton } from "../components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Entypo";
import { FONTS } from "../constants/theme";

const handlePress = () => {
  console.log("handlePressed");
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: "35%",
          backgroundColor: "#93BFCF",
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 75,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 33, color: "#FFF", fontWeight: "bold" }}>
              Hello Alex
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#FFF",
                fontWeight: "light",
                opacity: 0.8,
              }}
            >
              What will you be learning today?
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../assets/default-avatar.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(	147, 191, 207,0.7)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 70,
          margin: -45,
        }}
      ></LinearGradient>

      <View
        style={{
          margin: 20,
          marginTop: -40,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/study-home.jpg")}
          resizeMode="contain"
          style={{
            width: "80%",
            height: 250,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
          style={{
            borderRadius: 20,
            backgroundColor: "#93BFCF",
          }}
        >
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: FONTS.bold,
                fontSize: 18,
              }}
            >
              Start a Study Session
            </Text>
            <Icon
              name="chat"
              size={30}
              color="#FFF"
              style={{ marginStart: 10 }}
            ></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

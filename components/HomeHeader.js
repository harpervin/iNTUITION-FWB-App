import { View, Text, Image } from "react-native";

const HomeHeader = () => {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 26, color: "#FFFFFF" }}>Hello Alex</Text>
          <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
            What will you be learning today?
          </Text>
        </View>

        <Image
          source={require("../assets/default-avatar.png")}
          resizeMode="contain"
          style={{ width: 50 }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

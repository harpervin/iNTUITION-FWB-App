import React, { useState } from "react";
import { View } from "react-native";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

const moduleData = [
  {
    id: "CC0001",
    title: "INQUIRY & COMMUNICATION IN AN INTERDISCIPLINARY WORLD",
  },
  { id: "CC0002", title: "NAVIGATING THE DIGITAL WORLD" },
  { id: "CC0003", title: "ETHICS & CIVICS IN A MULTICULTURAL WORLD" },
  { id: "CC0005", title: "HEALTHY LIVING & WELLBEING" },
  { id: "CC0006", title: "SUSTAINABILITY: SOCIETY, ECONOMY & ENVIRONMENT" },
  { id: "CC0007", title: "SCIENCE & TECHNOLOGY FOR HUMANITY" },
];

const studentData = [
  { id: "1", title: "Mr Albert", },
  { id: "2", title: "Mr Albert", },
  { id: "3", title: "Mr Albert", },
  { id: "4", title: "Mr Albert", },
];

const ModuleItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.moduleitem, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const StudentItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.studentItem, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const ExploreScreen = ({test}) => {
  const [selectedModuleId, setSelectedModuleId] = useState();

  const renderModuleItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedModuleId ? "#6096B4" : "#ffffff";
    const color = item.id === selectedModuleId ? "white" : "black";

    return (
      <ModuleItem
        item={item}
        onPress={() => setSelectedModuleId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderStudentItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedModuleId ? "#6096B4" : "#ffffff";
    const color = item.id === selectedModuleId ? "white" : "black";

    return (
      <StudentItem
        item={item}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}> 
      <SearchBar
        placeholder="Search here"
        onChangeText={(text) => console.log(text)}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: "#333",
          marginTop: 15,
          marginLeft: 30,
        }}
      >
        Filter based on:
      </Text>
      <View
        style={{
          height: 150,
        }}
      >
        <FlatList
          data={moduleData}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
          horizontal={true}
          renderItem={renderModuleItem}
          keyExtractor={(item) => item.id}
          extraData={selectedModuleId}
        />
      </View>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "500",
          color: "#333",
          marginBottom: 10,
          marginLeft: 30,
        }}
      >
        Discover New Friends!
      </Text>

      <FlatList
        data={studentData}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  moduleitem: {
    padding: 12,
    marginHorizontal: 8,
    height: 90,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  studentItem: {
    marginLeft: 30,
    marginRight: 30,
    padding: 12,
    marginHorizontal: 8,
    marginTop: 20,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
  },
  title: {
    fontSize: 12,
  },
  flatList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default ExploreScreen;

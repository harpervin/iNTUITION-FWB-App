//https://github.com/danish1658/react-native-dropdown-select-list

import React from "react";

import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import CustomButton from "../../components/CustomButton";

const SchoolRegisterScreen = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const schoolData = [
    { key: "NUS", value: "National University of Singapore" },
    { key: "NTU", value: "Nanyang Technological University" },
    { key: "SMU", value: "Singapore Management University" },
    { key: "SUTD", value: "Singapore University of Technology and Design" },
    { key: "SIT", value: "Singapore Institute of Technology" },
    { key: "SUSS", value: "Singapore University of Social Sciences" },
  ];

  const moduleData = [
    {
      key: "CC0001",
      value: "INQUIRY & COMMUNICATION IN AN INTERDISCIPLINARY WORLD",
    },
    { key: "CC0002", value: "NAVIGATING THE DIGITAL WORLD" },
    { key: "CC0003", value: "ETHICS & CIVICS IN A MULTICULTURAL WORLD" },
    { key: "CC0005", value: "HEALTHY LIVING & WELLBEING" },
    { key: "CC0006", value: "SUSTAINABILITY: SOCIETY, ECONOMY & ENVIRONMENT" },
    { key: "CC0007", value: "SCIENCE & TECHNOLOGY FOR HUMANITY" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 25 }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          What School are you from?
        </Text>
        <SelectList setSelected={setSelected} data={schoolData} />
        <Text
          style={{
            fontSize: 28,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
            marginTop: 30,
          }}
        >
          What Modules are you taking?
        </Text>
        <MultipleSelectList
          setSelected={(val) => setCategories(val)}
          data={moduleData}
          save="value"
          label="Categories"
        />

        <CustomButton label={"Register"} onPress={() => {}} />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "#93BFCF", fontWeight: "700" }}> Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SchoolRegisterScreen;

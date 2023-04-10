import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ fetchWeatherData }) {
  const [cityName, setCityName] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="enter city name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <Feather
        name="search"
        size={28}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 10,
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
  },
});

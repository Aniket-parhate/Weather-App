import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import SearchBar from "./components/SearchBar";

const API_KEY = "78cbe9d7acf7a321a6eb6bd9d82ad5db";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      // setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData("Pune");
    console.log(weatherData);
  }, []);

  if (loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={36} />
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View>
        <SearchBar fetchWeatherData={fetchWeatherData} />
        <Text style={{ textAlign: "center", marginTop: 300, fontSize: 20 }}>
          City not found!
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import WeatherInfo from './WeatherInfo';
const API_KEYS = '2adb558c0f58a00bcc6553a2d49b3e2a';
const Weather = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // add a function to fetch the weather data
  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}`);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      }
      else {
        setWeatherData(null);
      }
      setLoaded(true);
    }
    catch (error) {
      Alert.alert('Error', error.message)
    }
  }
  //  remember my city name
  useEffect(() => {
    fetchWeatherData('Denmark');
  }, []);
  // if the data is not loaded ,show a loading message...
  if (!loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "skyblue" }}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }
  const handleBackPress = async () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <View style={{ flexDirection: "row", marginTop: 60 }}>
        <TouchableOpacity
          style={styles.arrow}
          activeOpacity={0.7}
          onPress={handleBackPress}
        >
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>

        <Text style={{ color: '#191970', fontSize: 20, fontWeight: "bold", marginLeft: 20, marginTop: -35 }}>Weather</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  )
}

export default Weather

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 20,
    marginTop: -35
  }
})
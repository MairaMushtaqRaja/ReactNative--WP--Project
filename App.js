import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash'
import Home from './Home';
import Search from './Search';
import Weather from './Weather';

const Stack=createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Search' component={Search} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Weather' component={Weather} options={{headerShown:false}}></Stack.Screen>
     
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
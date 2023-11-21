import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native';

const Splash = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home');
    });
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={require('./assets/sunblock.jpg')} style={styles.image} />
        <Text style={styles.text}>Weather</Text>
      </Animated.View>
    </View>
  );
};

export default Splash;

const { height } = Dimensions.get('screen');
const height_Logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',

  },
  text: {
    textAlign: 'center',
    fontSize: 75,
    fontWeight: 'bold',
    color: '#191970',
  },
  image: {
    width: height_Logo,
    height: height_Logo,
    resizeMode: 'contain',
    borderRadius: height_Logo / 2,
    marginTop: 150,
    marginLeft: 79,
  },
});
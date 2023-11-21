import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({fetchWeatherData,navigation}) => {
    const [cityName, setCityName] = useState('');
    const handleBackPress = async () => {
        navigation.navigate('Home');
    };
    
    return (
        <View style={{ backgroundColor: "skyblue", flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 60 }}>
            <TouchableOpacity
                style={{marginLeft:20,marginTop:2}}
                activeOpacity={0.7}
                onPress={handleBackPress}
            >
                <Icon name="arrow-back-outline" size={30} color="white" />
            </TouchableOpacity>
            </View>
            <View style={styles.searchbar}>
                <Icon name="search" size={23} color="#191970" style={{marginLeft:20 }} onPress={()=>fetchWeatherData(cityName)}></Icon>
                <TextInput placeholder='Search for City' value={cityName} onChangeText={(text) => setCityName(text)} style={{ marginLeft: 70 }}></TextInput>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -40,
        marginLeft: 25,
        borderWidth: 1,
        borderRadius: 45,
        width: 350,
        height: 50,
        borderColor: "lightgray",
        paddingHorizontal: 6,
        backgroundColor: "lightgray"
    }
})
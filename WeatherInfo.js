import { SafeAreaView, StyleSheet, Text, View, Image,} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import Search from './Search';

const WeatherInfo = ({ weatherData,fetchWeatherData }) => {
    const {
        name,
        main: { temp, humidity, feels_like, pressure },
        wind: { speed },
        sys: { sunrise, sunset},
    } = weatherData;
    return (
        <SafeAreaView>
            <Search fetchWeatherData ={fetchWeatherData } />
            <View style={styles.headerContainer}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#191970", marginTop: 90 }}>{name}</Text>

                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/partlycloudy.png')} style={{ width: 155, height: 140, marginTop: 35, marginLeft: 30 }}></Image>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 60, marginLeft: 20, fontSize: 30, color: "#fff", fontWeight: "bold" }}>{temp}°C</Text>
                </View>

            </View>
            <View style={{ marginLeft: 230, marginTop: -50 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#191970", marginTop: -16, marginLeft: -25, fontSize: 15 }}> Feel Likes {feels_like} º</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                    <Text style={{ color: "#191970", marginLeft: 15, fontSize: 15 }}>{speed} km/h</Text>
                </View>
            </View>
            <View style={styles.box}>

                <View style={{ flexDirection: "row", marginLeft: 40, marginTop: 20 }}>
                    <Icon name="cloudy-outline" size={30} color="black"></Icon>
                    <Text style={{ marginLeft: 44, fontSize: 20, fontWeight: "bold", color: "#191970" }}>Air Quality</Text>
                </View>

                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 25 }}>
                    <Icon name="partly-sunny-outline" size={26} color="black" />
                    <Text style={{ marginLeft: 22, fontSize: 19, color: "#ffd700", marginTop: -8 }}>Wind</Text>
                </View>
                <Text style={{ marginLeft: 85, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>{speed}</Text>
                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 18 }}>
                    <Icon name="thunderstorm-outline" size={26} color="black" />
                    <Text style={{ marginLeft: 22, fontSize: 19, color: "#ffd700", marginTop: -8 }}>Humidity</Text>
                </View>
                <Text style={{ marginLeft: 100, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>{humidity}</Text>

                <View style={{ flexDirection: "row", marginTop: -100, marginLeft: 185 }}>
                    <Icon name="thermometer-outline" size={26} color="black" />
                    <Text style={{ marginLeft: -3, fontSize: 19, color: "#ffd700", marginTop: -3 }}>Tempurature</Text>
                </View>
                <Text style={{ marginLeft: 230, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -5 }}>{temp}</Text>

                <View style={{ flexDirection: "row", marginLeft: 185, marginTop: 18 }}>
                    <Icon name="speedometer-outline" size={26} color="black" />
                    <Text style={{ marginLeft: 8, fontSize: 19, color: "#ffd700", marginTop: -8 }}>Pressure</Text>
                </View>
                <Text style={{ marginLeft: 240, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>{pressure}</Text>
            </View>
            <View style= {styles.footer}>
                <Image source={require('./assets/partlycloudy.png')} style={styles.image}></Image>
                <Text style={styles.text}>Sun Rise</Text>
                <Text style={styles.value} >{sunrise}</Text>
            </View>
           <View style={styles.header}>
           <Image source={require('./assets/partlycloudy.png')} style={styles.image}></Image>
                <Text style={styles.text}>Sun  Set</Text>
                <Text style={styles.value} >{sunset}</Text>
           </View>

        </SafeAreaView>
    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 150,
    },
    imageContainer: {
        flexDirection: 'row',
    },
    box: {
        backgroundColor: "#f0fff0",
        width: 360,
        height: 180,
        borderRadius: 10,
        marginLeft: 28,
        marginTop: 50,
    },
    image: {
        width: 85,
        height: 80,
        marginTop:18,
        marginLeft:35
    },
    text: {
        marginTop: 100,
        marginLeft: -79,
        fontSize: 20,
        fontWeight: "bold",
        color: '#191970'
    },
    value:{
        marginTop:132,
        marginLeft:-85,
        color:"#191970"
    },
    footer:{
        flexDirection:"row",
        backgroundColor:"#fffff0",
        width:170,
        height:170,
        marginTop:19,
        marginLeft:25,
        borderRadius:20
    },
    header:{
        flexDirection:"row",
        backgroundColor:"#fffff0",
        width:170,
        height:170,
        marginTop:-168,
        marginLeft:210,
        borderRadius:20
    }


})
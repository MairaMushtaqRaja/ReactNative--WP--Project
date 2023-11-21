import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
const Home = () => {
    return (
        <View style={{ backgroundColor: "skyblue", flex: 1 }}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "#191970", marginTop: 29 }}>Karachi</Text>
                    <Text style={{ fontSize: 15, color: "#191970" }}>Sunday,12 Sep</Text>
                </View>
            </View>
            <View>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/partlycloudy.png')} style={{ width: 160, height: 160, marginTop: 35, marginLeft: 30 }}></Image>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginTop: 60, marginLeft: 50, fontSize: 30, color: "#fff", fontWeight: "bold" }}>23°C</Text>
                </View>

            </View>
            <View style={{ marginLeft: 250, marginTop: -65 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#191970", marginTop: -16, marginLeft: -25, fontSize: 15 }}> Feel Likes 26 º</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 6 }}>
                    <Text style={{ color: "#191970", marginLeft: 15, fontSize: 15 }}>8 km/h</Text>
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
                <Text style={{ marginLeft: 85, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>8km/h</Text>
                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 18 }}>
                    <Icon name="thunderstorm-outline" size={26} color="black" />
                    <Text style={{ marginLeft: 22, fontSize: 19, color: "#ffd700", marginTop: -8 }}>Humidity</Text>
                </View>
                <Text style={{ marginLeft: 100, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>64</Text>

                <View style={{ flexDirection: "row", marginTop: -100, marginLeft: 185 }}>
                    <Icon name="thermometer-outline" size={26} color="black" />
                    <Text style={{ marginLeft: -3, fontSize: 19, color: "#ffd700", marginTop: -3 }}>Tempurature</Text>
                </View>
                <Text style={{ marginLeft: 230, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -5 }}>23</Text>

                <View style={{ flexDirection: "row", marginLeft: 185, marginTop: 18 }}>
                    <Icon name="speedometer-outline" size={26} color="black" />
                    <Text style={{ marginLeft: 8, fontSize: 19, color: "#ffd700", marginTop: -8 }}>Pressure</Text>
                </View>
                <Text style={{ marginLeft: 240, fontSize: 15, color: "#191970", fontWeight: "bold", marginTop: -11 }}>1012</Text>
            </View>
            <View style={styles.footer}>
                <Image source={require('./assets/partlycloudy.png')} style={styles.image}></Image>
                <Text style={styles.text}>Sun Rise</Text>
                <Text style={styles.value} >1661834187</Text>
            </View>
            <View style={styles.header}>
                <Image source={require('./assets/partlycloudy.png')} style={styles.image}></Image>
                <Text style={styles.text}>Sun  Set</Text>
                <Text style={styles.value} >1661882248</Text>
            </View>
        </View>
    )
}
export default Home
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
        marginTop: 70,
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "#fffff0",
        width: 170,
        height: 170,
        marginTop: 19,
        marginLeft: 25,
        borderRadius: 20
    },
    header: {
        flexDirection: "row",
        backgroundColor: "#fffff0",
        width: 170,
        height: 170,
        marginTop: -168,
        marginLeft: 210,
        borderRadius: 20
    },
    image: {
        width: 85,
        height: 80,
        marginTop: 18,
        marginLeft: 35
    },
    text: {
        marginTop: 100,
        marginLeft: -79,
        fontSize: 20,
        fontWeight: "bold",
        color: '#191970'
    },
    value: {
        marginTop: 132,
        marginLeft: -85,
        color: "#191970"
    },
    
})
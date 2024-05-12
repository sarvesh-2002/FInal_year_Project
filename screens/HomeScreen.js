import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  Linking,
} from "react-native";
import { FooterBar } from "../components/FooterBar";
import { SliderBox } from "react-native-image-slider-box";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { sharedStyles } from "../styles";

const HomeScreen = ({ navigation }) => {
  const images = [
    require("../assets/slider1.jpeg"),
    require("../assets/slider2.jpeg"),
    require("../assets/slider3.jpeg"),
    require("../assets/slider4.jpeg"),
  ];
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.header}>
        {/* Background Ellipse Shape */}
        <View style={styles.ellipse}></View>

        {/* Search Feature */}
        <View style={styles.search}>
          <TextInput placeholder="Search Something"></TextInput>
          <FontAwesomeIcon name="search" size={30} color="black" style={{}} />
        </View>

        {/* Slider Feature */}
        <View style={styles.slider}>
          <SliderBox
            images={images}
            dotColor="black"
            inactiveDotColor="#D9D9D9"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop={true}
            style={{}}
          />
        </View>
      </View>

      {/* Cards Shape */}
      <ScrollView style={[{}]}>
        <View style={[styles.container]}>
          <View style={[styles.row]}>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("ResumeAnalysis")}
            >
              <Image
                source={require("../assets/images1.jpeg")}
                style={{ height: 90, width: 100 }}
              />
              <Text style={styles.cardText}>User Analytics </Text>
            </Pressable>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("JobPosts")}
            >
              <Image
                source={require("../assets/image2.png")}
                style={{ height: 90, width: 100 }}
              />
              <Text style={styles.cardText}>Apply for Jobs</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("PracticeScreen")}
            >
              <Image
                source={require("../assets/image3.png")}
                style={{ height: 90, width: 100 }}
              />
              <Text style={styles.cardText}>Practice</Text>
            </Pressable>
            <Pressable
              style={styles.card}
              onPress={() => navigation.navigate("TestHome")}
            >
              <Image
                source={require("../assets/image4.png")}
                style={{ height: 90, width: 100 }}
              />
              <Text style={styles.cardText}>Test</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <FooterBar navigation={navigation} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    height: "42%",
  },
  ellipse: {
    height: 150,
    width: "100%",
    backgroundColor: "#244A61",
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },

  search: {
    ...sharedStyles.TextRegular,
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    top: -110,
    marginLeft: 35,
  },
  slider: {
    height: 200,
    backgroundColor: "yellow",
    width: "85%",
    backgroundColor: "white",
    marginHorizontal: 30,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.3,
    top: -90,
  },

  Slidercard: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: 300,
    margin: 20,
    backgroundColor: "yellow",
  },
  sliderContent: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    ...sharedStyles.TextRegular,
    flex: 1,
    height: 150,
    width: 80,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    position: "relative",
    alignItems: "center",
    margin: 20,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "black",
    shadowOpacity: 0.4,
  },
  cardText: {
    fontSize: 17,
    marginTop: 10,
  },
});
export default HomeScreen;

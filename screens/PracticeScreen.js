import React, { useState } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  TextInput,
  ScrollView 
} from "react-native";
import { FooterBar } from "../components/FooterBar";
import { sharedStyles } from "../styles";

const PracticeScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.navigate("Home")}
        />

        <Text
          style={[
            { color: "white", marginLeft: 10 },
            sharedStyles.TextSubheading,
          ]}
        >
          {"Practice"}
        </Text>
        </View>
        <View style ={styles.intro}>
          <View >
            <Text style={[sharedStyles.TextTitle,{marginTop:20} ]}>{"Study Material"}</Text>
            <Text style={[{marginTop:20 },sharedStyles.TextRegular]}>Resource for tech </Text>
            <Text style={[sharedStyles.TextRegular ]}>interview preparation</Text>
          </View>
          <View style={backgroundColor ="yellow"}>
          <Image
                source={require("../assets/Practice_Screen.png")}
                style={{ height: 130, width: 120 }}
              />
          </View>
        </View>
        <ScrollView  style ={styles.course} >
          <View style={styles.tabs}>
              <Text style={styles.tabText}>Data Structure and Algorithms </Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"
              onPress={() => navigation.navigate("DSAScreen")}
            />
          </View>
          <View style={styles.tabs}>
              <Text style={styles.tabText}>Aptitude and Reasoning </Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"
              onPress={() => navigation.navigate("AptiScreen")}
            />
          </View>
          <View style={styles.tabs}>
              <Text style={styles.tabText}>Computer Fundamentals </Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
          <View style={styles.tabs}>
              <Text style={styles.tabText}>Interview Preparation </Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </ScrollView >
        
        <FooterBar navigation={navigation} />
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"white",
    paddingTop: StatusBar.currentHeight, // Ensures content starts below status bar
  },
  header: {
    height: "6.5%",
    minHeight: 50,
    width: "100%",
    backgroundColor: "#244A61",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  intro: {
    backgroundColor:"white",
    flexDirection:"row",
    justifyContent:"space-between",
    gap:37,
    padding: 10,
  },
  course:{
    flex: 1,
    padding: 12,
    marginHorizontal: 20,
    width:"95%"
  },
  tabs:{
    flexDirection:"row",
    width:"100%",
    height:60,
    borderWidth:2,
    borderColor:"#D9D9D9",
    borderRadius: 16,
    paddingHorizontal:23,
    justifyContent: "space-between",
    alignItems: "center", 
    marginVertical:20   
  },
  tabText :{
    fontWeight:"bold",
    fontSize:17
  }

});

export default PracticeScreen;
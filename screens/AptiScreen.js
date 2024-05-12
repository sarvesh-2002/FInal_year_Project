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
  ScrollView,
} from "react-native";
import { FooterBar } from "../components/FooterBar";
import { sharedStyles } from "../styles";

const AptiScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.navigate("PracticeScreen")}
        />

        <Text
          style={[
            { color: "white", marginLeft: 10 },
            sharedStyles.TextSubheading,
          ]}
        >
          {"Aptitude & Reasoning"}
        </Text>
      </View>
      <View style={styles.intro}>
        <Text style={[sharedStyles.TextHeading, { marginTop: 20 }]}>
          {"Your learning content"}
        </Text>
      </View>
      <ScrollView style={styles.course}>
        <View style={styles.tabs}>
          <Text style={styles.tabText}>Data Structure and Algorithms </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={25}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
        <View style={styles.tabs}>
          <Text style={styles.tabText}>Aptitude and Reasoning </Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={25}
            color="black"
            onPress={() => navigation.navigate("Home")}
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
      </ScrollView>

      <FooterBar navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
    backgroundColor: "white",
  },
  course: {
    flex: 1,
    padding: 12,
    margin: 25,
    width: "95%",
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    height: 55,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 16,
    paddingHorizontal: 23,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default AptiScreen;

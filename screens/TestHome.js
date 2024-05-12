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

const TestHome = ({ navigation }) => {
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
          {"Test"}
        </Text>
      </View>
      <View style={styles.intro}>
        <View>
          <Text style={[sharedStyles.TextTitle, { marginTop: 20 }]}>
            {"Test Forum"}
          </Text>
          <Text style={[{ marginTop: 20 }, sharedStyles.TextRegular]}>
            Mock Test for
          </Text>
          <Text style={[sharedStyles.TextRegular]}>Placement preparation</Text>
        </View>
        <View style={(backgroundColor = "yellow")}>
          <Image
            source={require("../assets/Practice_Screen.png")}
            style={{ height: 130, width: 120 }}
          />
        </View>
      </View>
      <ScrollView style={styles.course}>
        <Pressable
          style={styles.tabs}
          onPress={() => navigation.navigate("QATestListScreen")}
        >
          <Text style={styles.tabText}>Quantitative Aptitude</Text>
          <MaterialCommunityIcons name="arrow-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.tabs}
          onPress={() => navigation.navigate("AptiScreen")}
        >
          <Text style={styles.tabText}>Logical Reasoning </Text>
          <MaterialCommunityIcons name="arrow-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.tabs}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.tabText}> Verbal Reasoning </Text>
          <MaterialCommunityIcons name="arrow-right" size={25} color="black" />
        </Pressable>
        <Pressable
          style={styles.tabs}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.tabText}>Technical MCQ </Text>
          <MaterialCommunityIcons name="arrow-right" size={25} color="black" />
        </Pressable>
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
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 37,
    padding: 10,
  },
  course: {
    flex: 1,
    padding: 12,
    marginHorizontal: 20,
    width: "95%",
  },
  tabs: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 16,
    paddingHorizontal: 23,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  tabText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
export default TestHome;

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { sharedStyles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PortfolioScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = async () => {
      const storedName = await AsyncStorage.getItem("username");
      if (storedName) {
        // Capitalize the first letter
        const capitalized =
          storedName.charAt(0).toUpperCase() + storedName.slice(1);
        setName(capitalized);
      }
    };

    getName();
  }, []);

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.rectangleMain}>
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
          {"Profile"}
        </Text>
      </View>

      <View style={styles.rectangleTwo}>
        <FontAwesomeIcon
          name="user"
          size={90}
          color="black"
          style={{ alignSelf: "center", margin: 10 }}
        />
        <Text
          style={[
            sharedStyles.TextHeading,
            { textAlign: "center", margin: 10 },
          ]}
        >
          {name}
        </Text>
      </View>

      {/* <View style={{ flexDirection: "row" }}>
        <FontAwesomeIcon
          name="user"
          size={20}
          style={{ marginLeft: "20%", marginTop: "16%" }}
        />
        <Text
          style={[
            sharedStyles.TextSubheading,
            { marginTop: "15%", marginLeft: "5%" },
          ]}
        >
          {name}
        </Text>
      </View> */}

      {/* <View style={styles.line}></View> */}

      {/* <View style={{ flexDirection: "row" }}>
        <FontAwesomeIcon
          name="graduation-cap"
          size={20}
          style={{ marginLeft: "20%", marginTop: "6%" }}
        />
        <Text style={styles.textContent}>Qualification</Text>
      </View> */}

      {/* <View style={styles.line}></View> */}

      {/* <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="ballot"
          size={25}
          style={{ marginLeft: "20%", marginTop: "5%" }}
        />
        <Text style={styles.textContent}>My Application</Text>
      </View> */}

      {/* <View style={styles.line}></View> */}
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="logout"
          size={25}
          style={{ marginLeft: "20%", marginTop: "5%" }}
        />
        <Text style={styles.textContent} onPress={() => logout()}>
          Logout
        </Text>
      </View>

      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleMain: {
    width: "100%",
    height: 250,
    backgroundColor: "#244A61",
    paddingTop: StatusBar.currentHeight,
  },
  rectangleTwo: {
    width: 150 * 2,
    height: 200,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: "30%",
  },
  line: {
    width: 150 * 2,
    height: 1,
    backgroundColor: "#244A61",
    marginLeft: "15%",
    marginTop: "1%",
  },
  textContent: {
    ...sharedStyles.TextSubheading,
    marginTop: "4%",
    marginLeft: "2%",
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
});

export default PortfolioScreen;

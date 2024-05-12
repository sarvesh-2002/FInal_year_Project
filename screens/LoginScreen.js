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
  ActivityIndicator,
} from "react-native";
import { sharedStyles } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://darshan-rahate.me/api/login/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.token) {
        await AsyncStorage.setItem("userToken", json.token);
        await AsyncStorage.setItem("email", json.user.email.toString());
        await AsyncStorage.setItem("username", json.user.username);
        navigation.navigate("Home");
      } else {
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={[sharedStyles.TextTitle, { color: "#244A61" }]}>
          Login
        </Text>

        {/* Input Style for Email */}

        <View style={styles.inputHeading}>
          <FontAwesomeIcon name="envelope-o" size={28} color="black" />
          <Text style={[sharedStyles.TextRegular, { color: "#8A8484" }]}>
            Email
          </Text>
        </View>
        <TextInput
          placeholder="Enter your email"
          style={styles.inputStyle}
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.line}></View>

        {/* Input Style for Password */}

        <View style={styles.inputHeading}>
          <MaterialCommunityIcons name="lock-outline" size={35} color="black" />
          <Text style={[sharedStyles.TextRegular, { color: "#8A8484" }]}>
            Password
          </Text>
        </View>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          style={styles.inputStyle}
          onChangeText={setPassword}
          value={password}
        />

        <View style={styles.line}></View>

        {/* Forget Password text */}
        <View style={{ flexDirection: "row" }}>
          <Text style={sharedStyles.TextRegular}>Forget Password ? </Text>
          <Pressable onPress={() => navigation.navigate("ForgetP")}>
            <Text style={styles.clickableText}>Click here !</Text>
          </Pressable>
        </View>

        {/* Login Buttons */}
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => handleLogin()}
            disabled={isLoading}
            style={[
              styles.singInButton,
              { backgroundColor: isLoading ? "#ccc" : "#244A61" },
            ]}
            // style={[
            //   styles.uploadButton,
            //   { : "#4CAF50" },
            // ]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>LOGIN</Text>
          </Pressable>
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 200,
  },
  line: {
    height: 2,
    width: "80%",
    backgroundColor: "#8A8484",
    marginLeft: 15,
    marginTop: 10,
  },
  inputStyle: {
    ...sharedStyles.TextRegular,
    marginLeft: 15,
    marginTop: 10,
  },
  inputHeading: {
    flex: 0,
    flexDirection: "row",
    columnGap: 10,
    marginTop: 20,
    marginLeft: 15,
    alignItems: "center",
  },
  clickableText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
    marginLeft: 0,
    color: "#244A61",
  },
  buttonsContainer: {
    maxHeight: "25%",
    flex: 1,
    marginTop: "15%",
    justifyContent: "space-around",
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
  },
});

export default LoginScreen;

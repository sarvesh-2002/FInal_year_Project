import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { sharedStyles } from "../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SignUpScreen = ({ navigation }) => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [pass, onChangePass] = useState("");
  const [conPass, onChangeConPass] = useState("");
  const [errors, onChangeErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, pass]);

  const validateForm = () => {
    let errors = {};

    // validate name
    if (!name) {
      errors.name = "Name is required";
    }

    // validate email
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // validate password
    if (!pass) {
      errors.pass = "Password is required";
    } else if (pass.length < 6) {
      errors.pass = "Password must be at least  characters";
    }

    if (!conPass) {
      errors.conPass = "Confirm Password is required";
    } else if (conPass != pass) {
      errors.conPass = "Confirm password should be same as password";
    }

    // set the errors and update form validity
    onChangeErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Form is valid, perform the submmision logic
      console.log("Form submitted successfully!");
    } else {
      // Foem is invalid , display error messages
      console.log("Form has errors. Please correct them.");
    }
  };

  return (
    <View style={styles.background}>
      <View>
        <View>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color="black"
            onPress={() => navigation.navigate("Login")}
            style={styles.header}
          />
        </View>
        <Text
          style={[sharedStyles.TextTitle, { marginLeft: 10, marginTop: 30 }]}
        >
          Create Account
        </Text>
      </View>
      <TextInput
        style={styles.container}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={(name) => onChangeName(name)}
      />
      <TextInput
        placeholder="Enter Your email"
        style={styles.container}
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        placeholder="Enter password"
        style={styles.container}
        keyboardType="numeric"
        secureTextEntry={true}
        value={pass}
        onChangeText={(pass) => onChangePass(pass)}
      />
      <TextInput
        placeholder="confirm password"
        style={styles.container}
        keyboardType="numeric"
        secureTextEntry={true}
        value={conPass}
        onChangeText={(conPass) => onChangeConPass(conPass)}
      />

      {/* Sign up */}
      <TouchableOpacity
        style={[
          styles.singInButton,
          { backgroundColor: "#244A61" },
          { opacity: isFormValid ? 1 : 0.5 },
        ]}
        disabled={!isFormValid}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: "white" }]}>
          {"Sign Up ->"}
        </Text>
      </TouchableOpacity>

      {/* sign in */}
      <View style={{ flexDirection: "row", marginLeft: 90 }}>
        <Text style={sharedStyles.TextRegular}>Already Have Account? </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.clickableText}>{"Sign In "}</Text>
        </Pressable>
      </View>

      {/* Display error message */}
      {Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.error}>
          {error}
        </Text>
      ))}
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
    ...sharedStyles.TextRegular,
    height: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#F2F0F1",
    textAlign: "left",
    marginTop: 30,
  },
  singInButton: {
    borderRadius: 25,
    height: 40,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
  },
  buttonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
  },
  header: {
    height: "6.5%",
    minHeight: 50,
    padding: 10,
  },
  clickableText: {
    ...sharedStyles.TextRegular,
    color: "#244A61",
    fontWeight: "bold",
  },
  error: {
    ...sharedStyles.TextExtraSmall,
    color: "red",
  },
});

export default SignUpScreen;

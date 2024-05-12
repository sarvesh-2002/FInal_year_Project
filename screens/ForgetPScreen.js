import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { sharedStyles } from "../styles";

const ForgetPScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = () => {
    // API call to send OTP
    // On success:
    setStep(2);
  };

  const handleOTPSubmit = () => {
    // API call to verify OTP
    // On success:
    setStep(3);
  };

  const handlePasswordReset = () => {
    // API call to reset password
    // On success:
    // Handle post password reset (e.g., navigate to login)
    navigation.navigate("Home");
  };
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      {/* Progress bar */}
      <View style={styles.progressIndicatorContainer}>
        <View
          style={[styles.progressIndicator, { backgroundColor: "#5E99FF" }]}
        />
        <View
          style={[
            styles.progressIndicator,
            { backgroundColor: step > 1 ? "#5E99FF" : "#D9D9D9" },
          ]}
        />
        <View
          style={[
            styles.progressIndicator,
            { backgroundColor: step > 2 ? "#5E99FF" : "#D9D9D9" },
          ]}
        />
      </View>

      {/* Send OTP */}
      {step === 1 && (
        <View style={styles.container}>
          <Image
            source={require("../assets/forgot-pass.png")}
            style={{ width: "100%", height: "50%", marginTop: 25 }}
          />
          <View style={styles.interactionArea}>
            <Text style={sharedStyles.TextTitle}>{"Forgot Password?"}</Text>

            <Text style={[sharedStyles.TextRegular, { marginTop: 30 }]}>
              {"Please reset it by verifying your identity"}
            </Text>

            <TextInput
              placeholder="Enter Email Address"
              autoComplete="email"
              keyboardType="email-address"
              returnKeyType="send"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />

            <Pressable style={styles.nextButton} onPress={handleEmailSubmit}>
              <Text style={styles.nextButtonText}>{"SEND OTP"}</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Verify OTP */}
      {step === 2 && (
        <View style={styles.container}>
          <Image
            source={require("../assets/verify-opt.png")}
            style={{ width: "100%", height: "50%", marginBottom: 25 }}
          />
          <View style={styles.interactionArea}>
            <Text style={sharedStyles.TextTitle}>{"Verify"}</Text>

            <Text style={[sharedStyles.TextRegular, { marginTop: 30 }]}>
              {"Enter the OTP sent to your email."}
            </Text>

            <TextInput
              placeholder="Enter OTP"
              keyboardType="numeric"
              returnKeyType="send"
              style={styles.input}
              value={otp}
              onChangeText={setOtp}
            />

            <Pressable style={styles.nextButton} onPress={handleOTPSubmit}>
              <Text style={styles.nextButtonText}>{"SEND OTP"}</Text>
            </Pressable>
          </View>
        </View>
      )}

      {/* Set New Password */}
      {step === 3 && (
        <View style={styles.container}>
          <Image
            source={require("../assets/guard.png")}
            style={{
              width: "90%",
              height: "45%",
              marginTop: 40,
              marginBottom: 22,
            }}
          />
          <View style={styles.interactionArea}>
            <Text style={sharedStyles.TextTitle}>{"Create New Password"}</Text>

            <TextInput
              placeholder="New Password"
              returnKeyType="next"
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              placeholder="Re-enter Password"
              returnKeyType="done"
              style={styles.input}
            />

            <Pressable style={styles.nextButton} onPress={handlePasswordReset}>
              <Text style={styles.nextButtonText}>{"SEND OTP"}</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  progressIndicatorContainer: {
    flexDirection: "row",
    height: "2%",
    marginTop: "5%",
    paddingHorizontal: "10%",
    justifyContent: "space-evenly",
  },
  progressIndicator: {
    width: "26%",
    height: "100%",
    borderRadius: 10,
  },
  interactionArea: {
    marginTop: 10,
    justifyContent: "space-around",
    maxHeight: "32%",
  },
  input: {
    ...sharedStyles.TextRegular,
    borderBottomWidth: 1,
    width: 250,
    marginTop: 40,
  },
  nextButton: {
    backgroundColor: "#244A61",
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    alignSelf: "center",
  },
  nextButtonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
    color: "white",
  },
});

export default ForgetPScreen;

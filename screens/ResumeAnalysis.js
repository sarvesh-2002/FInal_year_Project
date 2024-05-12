import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Alert,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { sharedStyles } from "../styles";
import { FooterBar } from "../components/FooterBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";

const ResumeAnalysis = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const uploadResume = async () => {
    setIsLoading(true);
    setData({});
    const res = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (res.type === "cancel") {
      console.log("User canceled the document picker");
    }

    const doc = res.assets[0];
    const url = "https://darshan-rahate.me/api/app-resume-analysis/";
    // const token = "aad2f129c663dd292417060f16b981f669272667";
    const token = await AsyncStorage.getItem("userToken");

    const formData = new FormData();
    formData.append("file", {
      uri: doc.uri,
      name: doc.name,
      type: "application/pdf",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      if (response.status === 201) {
        const responseJson = await response.json();
        setIsLoading(false);
        setData(responseJson);
        console.log("Upload successful", responseJson);
      }
    } catch (error) {
      console.error("Upload failed", error);
      Alert.alert("Upload Failed", `Failed to upload resume: ${error.message}`);
    }
    return;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
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
          Resume Analysis
        </Text>
      </View>

      {/* Main Content In Middle Area */}
      <ScrollView style={[styles.mainContentContainer]}>
        <Text style={sharedStyles.TextSubheading}>Upload your resume</Text>
        <Pressable
          android_ripple={{
            color: "black",
            foreground: true,
          }}
          style={[
            styles.uploadButton,
            { backgroundColor: isLoading ? "#ccc" : "white" },
          ]}
          onPress={() => uploadResume()}
          disabled={isLoading}
        >
          <MaterialCommunityIcons name="cloud-upload-outline" size={25} />
          <Text style={[sharedStyles.TextSubheading]}>Upload Resume</Text>
        </Pressable>
        <View style={{ paddingBottom: "10%" }}>
          {isLoading ? (
            // <Text style={sharedStyles.TextRegular}>Uploading...</Text>
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={{ marginTop: 100 }}
            />
          ) : (
            <View>
              {Object.keys(data).length !== 0 ? (
                <View style={styles.analysisContainer}>
                  <Text style={[sharedStyles.TextTitle, { color: "#244A61" }]}>
                    Analysis
                  </Text>
                  <Text
                    style={[sharedStyles.TextSubheading, { marginTop: 20 }]}
                  >
                    ◾Job Profile Prediction:
                  </Text>
                  <Text
                    style={[
                      sharedStyles.TextSubtitle,
                      { marginLeft: 50, color: "#244A61" },
                    ]}
                  >
                    {data.candidate_predicted_profile}
                  </Text>
                  <Text
                    style={[sharedStyles.TextSubheading, { marginTop: 20 }]}
                  >
                    ◾Experience Level:
                  </Text>
                  <Text
                    style={[
                      sharedStyles.TextSubtitle,
                      { marginLeft: 50, color: "#244A61" },
                    ]}
                  >
                    You are at {data.experienced_level} Level!
                  </Text>

                  <Text
                    style={[sharedStyles.TextSubheading, { marginTop: 20 }]}
                  >
                    ◾Recommended Skills:
                  </Text>
                  {data.recommended_skills.map((skill, index) => (
                    <Text
                      key={index}
                      style={[
                        sharedStyles.TextSubtitle,
                        { marginLeft: 50, color: "#244A61" },
                      ]}
                    >
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </Text>
                  ))}

                  <Text
                    style={[sharedStyles.TextSubheading, { marginTop: 20 }]}
                  >
                    ◾Resume Tips:
                  </Text>
                  {Object.keys(data.resume_sections_present).map(
                    (key, index) => (
                      <Text
                        key={index}
                        style={[
                          sharedStyles.TextSubtitle,
                          { marginLeft: 50, color: "#244A61" },
                        ]}
                      >
                        {/* {key}: {data.resume_sections_present[key]} */}
                        {data.resume_sections_present[key]
                          ? null
                          : `Please add "${
                              key.charAt(0).toUpperCase() + key.slice(1)
                            }"`}
                      </Text>
                    )
                  )}
                </View>
              ) : null}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Footer */}
      <FooterBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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

  mainContentContainer: {
    width: "100%",
    // height: "87%",
    paddingTop: 30,
    paddingHorizontal: 37,
  },

  uploadButton: {
    flexDirection: "row",
    overflow: "hidden",
    width: 210,
    height: 50,
    borderRadius: 100,
    borderWidth: 1.5,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  analysisContainer: {
    marginTop: 20,
  },
});

export default ResumeAnalysis;

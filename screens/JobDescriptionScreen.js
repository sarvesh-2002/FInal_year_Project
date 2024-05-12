import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sharedStyles } from "../styles";
import * as DocumentPicker from "expo-document-picker";

const JobDescriptionScreen = ({ navigation, route }) => {
  const { jobItem } = route.params;
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const uploadResume = async () => {
    setIsLoading(true);
    if (resumeUploaded) {
      Alert.alert("Applied!", "Application sent.");
      navigation.navigate("JobPosts");
      return;
    }

    const res = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (res.type === "cancel") {
      console.log("User canceled the document picker");
    }

    const doc = res.assets[0];
    const url = "https://darshan-rahate.me/api/upload-resume/";
    // const token = "aad2f129c663dd292417060f16b981f669272667";
    const token = await AsyncStorage.getItem("userToken");

    const formData = new FormData();
    formData.append("file", {
      uri: doc.uri,
      name: doc.name,
      type: "application/pdf",
    });
    formData.append("job_id", jobItem.id);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });
      if (response.status === 400) {
        Alert.alert("Already Applied", "You have already applied to this job.");
      } else {
        const responseText = await response.text();
        console.log("Upload successful", responseText);
        setResumeUploaded(true);
        Alert.alert(
          "Resume Uploaded",
          "Your resume has been successfully uploaded."
        );
      }
    } catch (error) {
      console.error("Upload failed", error);
      Alert.alert("Upload Failed", `Failed to upload resume: ${err.message}`);
    } finally {
      navigation.navigate("JobPosts");
    }

    // uploadDocument(res.assets[0]);
    return;
  };
  return (
    <View>
      {/* RectangleMain - Image of Company */}
      <View style={styles.rectangleMain}>
        {/* RectangleTwo - Company logo */}
        <View style={styles.rectangleTwo}>
          <Image
            source={{
              uri:
                "https://darshan-rahate.me" +
                (jobItem.company_logo.startsWith("/")
                  ? jobItem.company_logo
                  : "/" + jobItem.company_logo),
            }}
            style={styles.logo}
          />
        </View>
      </View>
      <Text style={[sharedStyles.TextTitle, { marginLeft: "20%" }]}>
        {jobItem.company}
      </Text>
      <Text style={[sharedStyles.TextSubheading, { marginLeft: "20%" }]}>
        {jobItem.location}
      </Text>
      <View style={styles.line}></View>
      <Text
        style={[
          sharedStyles.TextHeading,
          { marginLeft: "10%", marginBottom: "4%", marginTop: "10%" },
        ]}
      >
        {"About the Job"}
      </Text>
      <ScrollView style={{ marginBottom: "10%" }}>
        <View style={{ marginLeft: "10%" }}>
          <Text style={styles.components}>Job Title: {jobItem.title}</Text>
          <Text style={styles.components}>Location: {jobItem.location}</Text>
          <Text style={styles.components}>
            Experience: {0 + "-" + jobItem.experience + " yrs"}
          </Text>
          <Text style={styles.components}>
            Skills Required: {jobItem.skills_required}
          </Text>
          <Text style={styles.components}>
            Qualification: {jobItem.qualification}
          </Text>
          <Text style={styles.components}>Package: {jobItem.package} LPA</Text>
          <Text style={styles.components}>Job Type: {jobItem.job_type}</Text>
        </View>
        <View>
          <Pressable
            // disabled={true}
            onPress={uploadResume}
            disabled={isLoading} // Disable the button when isLoading is true
            style={[
              styles.uploadButton,
              { backgroundColor: isLoading ? "#ccc" : "#4CAF50" },
            ]}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              {resumeUploaded ? `Apply` : "Upload Resume"}
            </Text>
          </Pressable>
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
          <Pressable style={styles.uploadButton}></Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleMain: {
    width: "100%",
    height: "19%",
    backgroundColor: "#244A61",
    marginTop: StatusBar.currentHeight,
    marginBottom: "10%",
  },
  rectangleTwo: {
    width: "25%",
    height: "65%",
    backgroundColor: "white",
    marginTop: "20%",
    marginLeft: "20%",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#244A61",
    marginTop: "5%",
  },
  components: {
    ...sharedStyles.TextRegular,
    padding: 5,
  },
  singInButton: {
    borderRadius: 7,
    height: "24%",
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
  },

  buttonText: {
    ...sharedStyles.TextRegular,
    fontWeight: "bold",
  },
  logo: {
    width: 95,
    height: 95,
    resizeMode: "contain",
  },
  uploadButton: {
    borderRadius: 7,
    height: "16%",
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
  },
});
export default JobDescriptionScreen;

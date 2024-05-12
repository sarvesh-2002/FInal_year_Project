import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import OcticonIcon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { sharedStyles } from "../styles";
import { FooterBar } from "../components/FooterBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const JobPostsScreen = ({ navigation }) => {
  // State management for search bar
  const [text, setText] = useState("");
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

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  // State management for Job Filters
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      // Dummy data, will be replaced by API call.

      try {
        const response = await fetch("http://darshan-rahate.me/api/jobs/", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        const jobsData = await response.json();
        if (Object.keys(filters).length === 0) {
          setJobs(jobsData);
        } else {
          setJobs([]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchJobs();
  }, [filters]);

  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
  };

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
          Hi {name}👋
        </Text>
      </View>

      {/* Main Content In Middle Area */}
      <View style={[styles.mainContentContainer]}>
        <Text style={sharedStyles.TextTitle}>{"Find a job"}</Text>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <OcticonIcon name="search" color="black" size={25} />
          <TextInput
            style={[sharedStyles.TextRegular, { width: "75%" }]}
            placeholder="Search jobs"
            onChangeText={handleTextChange}
            value={text}
          />

          {/* Filter Button*/}
          <Pressable
            android_ripple={{
              color: "black",
              foreground: true,
            }}
            style={styles.filterButton}
            onPress={() => setIsFilterVisible(true)}
          >
            <OcticonIcon name="filter" color="white" size={18} />
          </Pressable>
        </View>

        {/* Filter Popup */}
        <FilterPopup
          isVisible={isFilterVisible}
          onClose={() => setIsFilterVisible(false)}
          onApply={handleApplyFilters}
        />

        {/* List of Jobs */}
        <FlatList
          data={jobs}
          renderItem={({ item, index }) => {
            const currentStyle =
              index % 2 === 0 ? styles.cardEven : styles.cardOdd;
            return (
              <JobCard
                jobItem={item}
                cardStyle={currentStyle}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[
            {
              alignItems: "center",
              paddingTop: 25,
            },
          ]}
        />
      </View>

      <FooterBar navigation={navigation} />
    </View>
  );
};

// Individual Job Card
const JobCard = ({ jobItem, cardStyle, navigation }) => {
  const postingTimestamp = new Date(jobItem.posting_timestamp);
  const now = new Date();
  const hoursAgo = Math.abs(now - postingTimestamp) / 36e5;

  return (
    <TouchableOpacity
      style={[styles.card, cardStyle]}
      onPress={() => navigation.navigate("JobDescription", { jobItem })}
    >
      <View style={styles.rowSpaceBetween}>
        <Text style={sharedStyles.TextHeading}>{jobItem.title}</Text>

        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri:
              "https://darshan-rahate.me" +
              (jobItem.company_logo.startsWith("/")
                ? jobItem.company_logo
                : "/" + jobItem.company_logo),
          }}
        />
      </View>

      <Text style={sharedStyles.TextSubheading}>{jobItem.company}</Text>

      <View style={styles.rowSpaceBetween}>
        <Text style={[sharedStyles.TextRegular, styles.tag]}>
          {"Experience " + jobItem.experience + " yrs"}
        </Text>

        <Text style={[sharedStyles.TextRegular, styles.tag]}>
          {jobItem.package + " LPA"}
        </Text>

        <Text style={[sharedStyles.TextRegular, styles.tag]}>
          {jobItem.job_type}
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <OcticonIcon name="clock" size={20} color="black" />

        <Text style={[sharedStyles.TextRegular, { marginLeft: 10 }]}>
          {"Be in the first"}
        </Text>

        <Text style={[sharedStyles.TextRegular, { marginLeft: 5 }]}>
          {jobItem.total_applicants + 5 + " applicants"}
        </Text>
      </View>

      <View style={[{ marginTop: 20 }, styles.rowSpaceBetween]}>
        <Text style={sharedStyles.TextRegular}>{jobItem.location}</Text>

        <Text style={sharedStyles.TextRegular}>
          {hoursAgo.toFixed(1) + " Hours Ago"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FilterPopup = ({ isVisible, onClose, onApply }) => {
  const [jobRoleFilter, setJobRoleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [remoteJobFilter, setRemoteJobFilter] = useState(true);
  const [onSiteJobFilter, setOnSiteJobFilter] = useState(true);

  const handleApplyFilters = () => {
    onApply({
      jobRoleFilter,
      locationFilter,
      salaryFilter,
      experienceFilter,
      remoteJobFilter,
      onSiteJobFilter,
    });
    onClose();
  };

  const handleClearFilters = () => {
    setJobRoleFilter("");
    setLocationFilter("");
    setSalaryFilter("");
    setExperienceFilter("");
    setRemoteJobFilter(true);
    setOnSiteJobFilter(true);
    onApply({});
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={sharedStyles.TextRegular}>Job Role</Text>
          <TextInput
            placeholder="e.g React Native Developer"
            value={jobRoleFilter}
            onChangeText={(text) => setJobRoleFilter(text)}
            style={styles.filterInput}
          />

          <Text style={sharedStyles.TextRegular}>Location</Text>
          <TextInput
            placeholder="e.g Mumbai"
            value={locationFilter}
            onChangeText={(text) => setLocationFilter(text)}
            style={styles.filterInput}
          />

          <Text style={sharedStyles.TextRegular}>Annual Salary (LPA)</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Annual salary expectation"
            value={salaryFilter}
            onChangeText={(text) => setSalaryFilter(text)}
            style={styles.filterInput}
          />

          <Text style={sharedStyles.TextRegular}>Years of Experience</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Required years of experience"
            value={experienceFilter}
            onChangeText={(text) => setExperienceFilter(text)}
            style={styles.filterInput}
          />

          <CheckBox
            onPress={() => setRemoteJobFilter(!remoteJobFilter)}
            title="Remote"
            isChecked={remoteJobFilter}
            style={sharedStyles.TextRegular}
          />
          <CheckBox
            onPress={() => setOnSiteJobFilter(!onSiteJobFilter)}
            title="On-site"
            isChecked={onSiteJobFilter}
            style={sharedStyles.TextRegular}
          />

          <View style={[styles.rowSpaceBetween, { marginTop: 10 }]}>
            <TouchableOpacity onPress={onClose} style={{ padding: 10 }}>
              <Text style={[sharedStyles.TextRegular, { color: "red" }]}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleClearFilters}
              style={{ padding: 10 }}
            >
              <Text style={styles.modalButton}>Clear All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleApplyFilters}
              style={{ padding: 10 }}
            >
              <Text style={styles.modalButton}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "checkbox-marked"
    : "checkbox-blank-outline";

  return (
    <Pressable
      onPress={props.onPress}
      style={[{ color: "#000", marginLeft: 5 }, styles.checkBoxComponent]}
    >
      <MaterialCommunityIcons name={iconName} size={24} color="#000" />
      <Text style={[styles.checkBoxTitle, sharedStyles.TextRegular]}>
        {props.title}
      </Text>
    </Pressable>
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
    height: "87%",
    paddingTop: 30,
    paddingHorizontal: 37,
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#DBDBDB",
    width: "100%",
    height: "5.4%",
    minHeight: 41,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  card: {
    // Using fixed values for width/height because % values seems to be not taking
    // FlatList as their direct parent for calculating dimensions.
    // Goal is find root cause and possibly use proportional(%) values.
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 24,
    padding: 20,
  },

  cardEven: {
    backgroundColor: "#FAE2D2",
  },

  cardOdd: {
    backgroundColor: "#E1D4FD",
  },
  tag: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalButton: {
    ...sharedStyles.TextRegular,
    color: "blue",
  },

  filterInput: {
    ...sharedStyles.TextRegular,
    borderWidth: 1,
    paddingVertical: 1,
    paddingLeft: 10,
    marginVertical: 10,
  },
  checkBoxComponent: {
    flexDirection: "row",
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    overflow: "hidden",
    backgroundColor: "#244A61",
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JobPostsScreen;

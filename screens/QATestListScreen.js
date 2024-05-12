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
  ScrollView ,
  TouchableOpacity
} from "react-native";
import { FooterBar } from "../components/FooterBar";
import { sharedStyles } from "../styles";
const QATestListScreen= ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.navigate("TestHome")}
        />

        <Text
          style={[
            { color: "white", marginLeft: 10 },
            sharedStyles.TextSubheading,
          ]}
        >
          {"Quantitative Aptitute"}
        </Text>
        </View>
        <View style ={styles.intro}>
            <Text style={[sharedStyles.TextHeading,{marginTop:20} ]}>{"Choose and Start"}</Text>
        </View>
        <ScrollView  style ={styles.course} >
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"TCS"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Hexaware"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Cognizant"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Tech Mahindra"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Deloitte"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Capgemini"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Test 1"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate("QATestScreen")}>
              <Text style={styles.tabText}>{"Test 2"}</Text>
              <MaterialCommunityIcons
              name="arrow-right"
              size={25}
              color="black"            
            />
          </TouchableOpacity>
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
  },
  course:{
    flex: 1,
    padding: 12,
    margin: 25,
    width:"95%"
  },
  tabs:{
    flexDirection:"row",
    width:"100%",
    height:55,
    borderWidth:2,
    borderColor:"#D9D9D9",
    borderRadius: 16,
    paddingHorizontal:23,
    justifyContent: "space-between",
    alignItems: "center", 
    marginVertical:10   
  },
  tabText :{
    fontWeight:"bold",
    fontSize:15
  }

});

export default QATestListScreen;
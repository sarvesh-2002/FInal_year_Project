import { StyleSheet, Text, View ,StatusBar,Image, ScrollView ,Linking} from 'react-native'
import React from 'react'
import { sharedStyles } from "../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FooterBar } from "../components/FooterBar";

const ArrayPractice = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.navigate("DSAScreen")}
        />
        <Text
          style={[
            { color: "white", marginLeft: 10 },
            sharedStyles.TextSubheading,
          ]}
        >
          {"Array"}
        </Text>
        </View>
        <ScrollView style={styles.body} >
           <Text style={styles.bodyHeading}>Array</Text>
           <Text style={styles.defination}>An array is a collection of items of same data type stored at contiguous memory locations. </Text>
           <Image
                source={require("../assets/array.png")}
                style={{width:350 ,marginHorizontal:10}}
              />
            <View style={styles.Website}>
                <Text style={styles.Websiteheading}>Websites You can Refer : </Text>
                <Text onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')} style={styles.Websitetest}> 1. What is Array ?</Text>
                <Text onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')} style={styles.Websitetest}> 2. Basic operation of Array</Text>
                <Text onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')}  style={styles.Websitetest}> 3. 2-D Array</Text>
            </View>
            <View style={styles.Website}>
                <Text style={styles.Websiteheading}>Practice Coding Problem : </Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/')} > 1. Top 50 Coding Problem for interview</Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/')} > 2. Leetcode - Array</Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/')} > 3. DSA Array Sheet</Text>
            </View>
            <View style={styles.Website}>
                <Text style={styles.Websiteheading}>Youtube video you can Refer: </Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')} > 1. Course :01</Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')} > 2. Course :02</Text>
                <Text  style={styles.Websitetest} onPress={() => Linking.openURL('https://www.geeksforgeeks.org/what-is-array/')} > 3. Course :03</Text>
            </View>
            <View style={styles.Website}>
                <Text style={styles.Websiteheading}>Some General Interview Questions: </Text>
                <Text  style={styles.Websitetest}> 1.Question:01</Text>
                <Text  style={styles.Websitetest}> 2.Question :02</Text>
                <Text  style={styles.Websitetest}> 3. Question :03</Text>
            </View>
        </ScrollView>
        <FooterBar navigation={navigation} />
    </View>
  )
}

export default ArrayPractice

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
      bodyHeading:{
        fontSize:25,
        padding:10,
        fontWeight:"bold"

      },
      body:{
        padding:10,
        marginHorizontal:5,
        // height:"70%"
      },
      defination:{
        fontSize:18,
        marginBottom:20,
        // color:"green"
      },
      Websiteheading:{
        fontSize:20,
        fontWeight:"bold",
        color:"#244A61",
        paddingVertical:5
      },
      Website:{
        paddingVertical:10,
      },
      Websitetest:{
        fontSize: 17,
        padding:5,
      }

})
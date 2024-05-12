import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgetPScreen from "./screens/ForgetPScreen";
import HomeScreen from "./screens/HomeScreen";
import JobDescriptionScreen from "./screens/JobDescriptionScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import JobPostsScreen from "./screens/JobPostsScreen";
import ScoreScreen from "./screens/ScoreScreen";
import PracticeScreen from "./screens/PracticeScreen";
import DSAScreen from "./screens/DSAScreen";
import AptiScreen from "./screens/AptiScreen";
import TestHome from "./screens/TestHome";
import QATestListScreen from "./screens/QATestListScreen";
import QATestScreen from "./screens/QATestScreen";
import TestResult from "./screens/TestResult";
import ArrayPractice from "./screens/ArrayPractice";
import ResumeAnalysis from "./screens/ResumeAnalysis";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgetP" component={ForgetPScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JobPosts" component={JobPostsScreen} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="JobDescription" component={JobDescriptionScreen} />

        <Stack.Screen name="Score" component={ScoreScreen} />
        <Stack.Screen name="PracticeScreen" component={PracticeScreen} />
        <Stack.Screen name="DSAScreen" component={DSAScreen} />
        <Stack.Screen name="AptiScreen" component={AptiScreen} />
        <Stack.Screen name="ArrayPractice" component={ArrayPractice} />
        <Stack.Screen name="TestHome" component={TestHome} />
        <Stack.Screen name="QATestListScreen" component={QATestListScreen} />
        <Stack.Screen name="QATestScreen" component={QATestScreen} />
        <Stack.Screen name="TestResult" component={TestResult} />
        <Stack.Screen name="ResumeAnalysis" component={ResumeAnalysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

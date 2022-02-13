import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";

import SignInPage from "./app/screens/SignInPage";
import InitialLanguageSelection from "./app/screens/InitialLanguageSelection";
import AppUserRoleSelection from "./app/screens/AppUserRoleSelection";
import ApplicantProfileDetails from "./app/screens/ApplicantProfileDetails";
import RecruiterProfileDetails from "./app/screens/RecruiterProfileDetails";
import ApplicantHelpSection from "./app/screens/ApplicantHelpSection";
import SignUpPage from "./app/screens/SignUpPage";
import RecruiterHelpSection from "./app/screens/RecruiterHelpSection";
import exercise_welcomescreen from "./app/screens/exercise_welcomescreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
var Picture = require("./app/assets/covid.png");

export default function App() {
  console.log("yolo");
  return (
    <View style={styles.container}>
      <Image source={Picture}></Image>
    </View>

    /* 
    <View style={styles.container}>
      <Text>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
    </View>
    */
    /*
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Login">
        <Stack.Screen name="Login" component={SignInPage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen
          name="Select Language"
          component={InitialLanguageSelection}
        />
        <Stack.Screen name="Role Selection" component={AppUserRoleSelection} />
        <Stack.Screen
          name="Applicant Details"
          component={ApplicantProfileDetails}
        />
        <Stack.Screen
          name="Recruiter Details"
          component={RecruiterProfileDetails}
        />
        <Stack.Screen
          name="Applicant Help Section"
          component={ApplicantHelpSection}
        />
        <Stack.Screen
          name="Recruiter Help Section"
          component={RecruiterHelpSection}
        />
      </Stack.Navigator>
    </NavigationContainer>

    <View style={styles.container}>
      <Text>Hi,This is OpenJobApp Team.</Text>
      <StatusBar style="auto" />
    </View>
*/
    /*
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={SignInPage} />
      </Drawer.Navigator>
    </NavigationContainer>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
  },
});

//Gives option to choose between "Job Seeker" and "Recruiter"
//For time being it will be set for the user once selected.
// Ability to change role  can be added later. Need discussion.

import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Platform,
  TextInput,
} from "react-native";

import colors from "../config/colors";

function AppUserRoleSelection(props) {
  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>Use App</Text>
      <Button title={"To Get Open Jobs"}></Button>
      <Button title={"To Hire Amazing people"}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    padding: Platform.OS === "android" ? 25 : 0, // hack for SafeAreaView on Android,use expo
    //relative positioning later
    fontStyle: "normal",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    fontWeight: "bold",
    //flex: 1,
  },
  signInText: {
    textAlign: "center",
    //flex: 1,
  },
});

export default AppUserRoleSelection;

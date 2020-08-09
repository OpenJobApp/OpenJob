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

function ApplicantProfileDetails(props) {
  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>Profile</Text>
      <Text>Full Name</Text>
      <TextInput></TextInput>
      <Text>Mobile Number</Text>
      <TextInput>For time being only Indian numbers</TextInput>
      <Text>City</Text>
      <TextInput>API or Manual or drop down</TextInput>
      <Text>State</Text>
      <TextInput>
        drop down from states or from openmap API or manual list
      </TextInput>
      <Text>Education</Text>
      <TextInput>
        I can put drop down here,like year wise till 12th and then degree
        details
      </TextInput>
      <Text>Experience</Text>
      <TextInput></TextInput>
      <Button title={"Save"}></Button>
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

export default ApplicantProfileDetails;

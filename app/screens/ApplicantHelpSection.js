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
import ApplicantProfileDetails from "./ApplicantProfileDetails";

function ApplicantHelpSection(props) {
  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>FAQ and Help for Applicant</Text>
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

export default ApplicantHelpSection;

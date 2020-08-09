import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";

import colors from "../config/colors";

function SignUpPage(props) {
  return (
    <SafeAreaView>
      <Text style={styles.pageTitle}>SignUp</Text>

      <Button title={"Facebook Button"}></Button>
      <Button title={"Instagram Button"}></Button>
      <Button title={"Phone Button"}></Button>
      <Text style={styles.signInText}>Sign In</Text>
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

export default SignUpPage;

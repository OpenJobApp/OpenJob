import { Assets } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
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

function exercise_welcomescreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hola Seniora</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //padding: Platform.OS === "android" ? StatusBar.currentHeight : 0, // hack for SafeAreaView on Android,use expo
    //relative positioning later

    flex: 1,
  },
});

export default exercise_welcomescreen;

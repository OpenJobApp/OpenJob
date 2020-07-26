import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import InitialLanguageSelection from "./app/screens/InitialLanguageSelection";

export default function App() {
  return (
    <InitialLanguageSelection />
    /*
    <View style={styles.container}>
      <Text>Hi,This is OpenJobApp Team.</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

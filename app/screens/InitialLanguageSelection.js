import React from "react";
import { View, ImageBackground, StyleSheet, Text, Button } from "react-native";

import colors from "../config/colors";

const onPressTitle = () => {
  console.log("Language Selected.(Dummy Msg)"); //using dummy word for to be implemented.
};

function InitialLanguageSelection(props) {
  return (
    <View style={styles.background}>
      <View style={styles.languageButton}>
        <Text style={styles.languageText}>Language</Text>
      </View>
      <Button style={styles.languageButton} title={"Language Button"}></Button>
      <ImageBackground
        style={styles.background}
        source={require("../assets/covid.png")}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  languageButton: {
    width: "100%",
    height: 70,
  },
  languageText: {
    fontStyle: "normal",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default InitialLanguageSelection;

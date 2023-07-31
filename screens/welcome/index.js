import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      
    <Text style={styles.thDfPfnu}>{"Welcome"}</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a8bdcb",
    height: "100%"
  },
  thDfPfnu: {
    width: 326,
    height: 121,
    lineHeight: 14,
    fontSize: 50,
    borderRadius: 0,
    position: "absolute",
    left: 17,
    textAlign: "center",
    top: 72,
    fontFamily: "Playfair Display",
    fontWeight: "700"
  }
});
export default WelcomeScreen;
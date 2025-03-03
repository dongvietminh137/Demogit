import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); 

const API = () => {
  return (
    <View style={styles.container}>
      {/* Logo và text */}
      { <Image source={require("../icon/logo.png")} style={styles.logo} /> }
      <Text style={styles.title}>nectar </Text>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175", // Màu nền theo thiết kế
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80, // Kích thước logo
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    opacity: 0.8,
  },
});

export default API;

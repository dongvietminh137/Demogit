import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding"); // Chuyển sau 2 giây
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/cadot.jpg")} style={styles.logo} />
      <Text style={styles.text}>nectar</Text>
      <Text style={styles.subText}>online groceries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});

export default SplashScreen;

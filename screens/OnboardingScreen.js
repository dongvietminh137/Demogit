import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Hình nền */}
      <Image source={require("../assets/anh3.3.jpg")} style={styles.backgroundImage} />

      {/* Nội dung đặt đè lên ảnh */}
      <View style={styles.overlay}>
        {/* Logo */}
        <Image source={require("../assets/cadot.jpg")} style={styles.logo} />

        <Text style={styles.title}>Welcome {"\n"}to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour!
        </Text>

        {/* Nút bắt đầu */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    position: "absolute",
    bottom: 100, // Đưa nội dung xuống gần đáy màn hình
    left: 0,
    right: 0,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#eee",
    textAlign: "center",
    marginBottom: 30, // Giữ khoảng cách giữa nội dung và nút
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 25,
    paddingHorizontal: 110,
    borderRadius: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;

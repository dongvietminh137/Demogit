import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

// Component Button đổi màu
const ColorButton = ({ color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => {
        onPress(color);
        Alert.alert(`Bạn đã chọn màu ${color.toUpperCase()}`);
      }}
    >
    <Text style={[styles.buttonText, color === "black" ? { color: "white" } : {}, color === "yellow" ? { color: "black" } : {}]}>
        {color.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default function BaiTapBuoi5() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* <Text style={styles.title}>Chọn màu nền</Text> */}

      {/* Danh sách button */}
      {["green", "blue", "brown", "yellow", "red", "black"].map((color) => (
        <ColorButton key={color} color={color} onPress={setBackgroundColor} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    width: 300,
    padding: 20,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

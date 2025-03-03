import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Ảnh nền full màn hình */}
      <Image
        source={require('../assets/anh.png')} // Thay link ảnh của bạn vào đây
        style={styles.backgroundImage}
      />

      {/* Overlay scan */}
      <View style={styles.scanContainer}>
        <View style={styles.scanOverlay} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={require('../assets/anh.png')} // Thay ảnh icon sản phẩm
          style={styles.productThumbnail}
        />
        <View>
          <Text style={styles.productLabel}>Lauren's</Text>
          <Text style={styles.productText}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: "absolute",
    resizeMode: "cover",
  },
  scanContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanOverlay: {
    width: width * 0.8,
    height: height * 0.5,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 15,
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: width * 0.9,
    padding: 10,
    borderRadius: 15,
    position: "absolute",
    bottom: 30,
    left: width * 0.05,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  productThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  productLabel: {
    fontSize: 12,
    color: "gray",
  },
  productText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#007bff",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
});

export default ScanScreen;

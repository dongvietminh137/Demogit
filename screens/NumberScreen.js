import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback 
} from "react-native";

const NumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* Nút Back */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>⬅</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.flag}>🇧🇩</Text>
            <TextInput
              style={styles.input}
              placeholder="+880"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Nút Next di chuyển lên khi bàn phím xuất hiện */}
          <TouchableOpacity 
            style={[styles.nextButton, isKeyboardVisible && styles.nextButtonUp]} 
            onPress={() => navigation.navigate("Verification")}
          >
            <Text style={styles.nextButtonText}>→</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#666",
        marginBottom: 5,  // Giúp căn chỉnh khoảng cách đẹp hơn
      },
    inner: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    backButton: {
      position: "absolute",
      top: 40,  // Hạ xuống thêm 20px
      left: 20,
      padding: 10,
    },
    backButtonText: {
      fontSize: 24,
      color: "#333",
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: -300, 
      marginBottom: 20,
      color: "#333",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFF",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: "#DDD",
    },
    flag: {
      fontSize: 20,
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: "#333",
    },
    nextButton: {
      position: "absolute",
      bottom: 30,
      right: 30,
      backgroundColor: "#00CC66",
      padding: 20,
      borderRadius: 100,
      elevation: 10,
      
    },
    nextButtonUp: {
      bottom: 100, // Đẩy nút lên trên khi bàn phím mở
    },
    nextButtonText: {
      fontSize: 24,
      color: "#FFF",
      textAlign: "center",
    },
  });
  

export default NumberScreen;

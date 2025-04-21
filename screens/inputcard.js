import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MyBasketScreen() {
  const navigation = useNavigation();
  const [address, setAddress] = useState("10th avenue, Lekki, Lagos State");
  const [phoneNumber, setPhoneNumber] = useState("09090605708");
  const [showDelivery, setShowDelivery] = useState(true);
  const [renderKey, setRenderKey] = useState(0);
  const [cardHolderName, setCardHolderName] = useState("Adolphus Chris");
  const [cardNumber, setCardNumber] = useState("1234 5678 9012 1314");
  const [date, setDate] = useState("10/30");
  const [ccv, setCcv] = useState("123");

  const handleCancelPress = () => {
    console.log("Cancel pressed, hiding delivery section");
    setShowDelivery(false);
    setRenderKey((prev) => prev + 1);
  };

  const handleCheckoutPress = () => {
    console.log("Checkout pressed, showing delivery section");
    setShowDelivery(true);
    setRenderKey((prev) => prev + 1);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1, position: "relative" }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#FFA451",
            borderRadius: 30,
            marginBottom: -100,
          }}
        >
          {/* Header Section */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 15,
              paddingHorizontal: 21,
              marginBottom: 50,
              opacity: showDelivery ? 0.5 : 1,
            }}
          >
            <View style={{ backgroundColor: "#FF3B30", borderRadius: 32, paddingVertical: 3 }} />
            <View style={{ flex: 1 }} />
          </View>

          {/* Back Button and Basket Title */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 50,
              marginLeft: 24,
              opacity: showDelivery ? 0.5 : 1,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 100,
                paddingVertical: 6,
                paddingLeft: 8,
                paddingRight: 10,
                marginRight: 34,
              }}
              onPress={() => navigation.navigate('Trangchu')}
            >
              <Image
                source={require("../assets/Vector.png")}
                resizeMode="stretch"
                style={{ width: 10, height: 25, marginRight: 4 }}
              />
              <Text style={{ color: "#27214D", fontSize: 16 }}>Go back</Text>
            </TouchableOpacity>

            <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "bold" }}>My Basket</Text>
          </View>

          {/* Basket Items Section */}
          <View style={{ backgroundColor: "#FFFFFF", paddingVertical: 77, opacity: showDelivery ? 0.5 : 1 }}>
            {/* Item 1 */}
            <View style={{ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: 24 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F1EFF6",
                  borderRadius: 10,
                  paddingVertical: 12,
                  paddingHorizontal: 13,
                  marginRight: 16,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image source={require("../assets/anh7.png")} resizeMode="stretch" style={{ width: 40, height: 40 }} />
              </TouchableOpacity>

              <View style={{ flex: 1, marginTop: 9, marginRight: 12 }}>
                <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  Quinoa fruit salad
                </Text>
                <Text style={{ color: "#000000", fontSize: 14 }}>2packs</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 3, marginTop: 21 }}>
                <Image
                  source={require("../assets/iconchuN.png")}
                  resizeMode="stretch"
                  style={{ width: 16, height: 12, marginRight: 4 }}
                />
                <Text style={{ color: "#27214D", fontSize: 16, fontWeight: "bold" }}>20,000</Text>
              </View>
            </View>

            <View style={{ height: 1, backgroundColor: "#F4F4F4", marginBottom: 31 }} />

            {/* Item 2 */}
            <View style={{ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: 24 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F1EFF6",
                  borderRadius: 10,
                  paddingVertical: 20,
                  paddingHorizontal: 12,
                  marginRight: 16,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image source={require("../assets/anh8.png")} resizeMode="stretch" style={{ width: 40, height: 24 }} />
              </TouchableOpacity>

              <View style={{ flex: 1, marginTop: 9, marginRight: 12 }}>
                <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  Melon fruit salad
                </Text>
                <Text style={{ color: "#000000", fontSize: 14 }}>2packs</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 3, marginTop: 21 }}>
                <Image
                  source={require("../assets/iconchuN.png")}
                  resizeMode="stretch"
                  style={{ width: "auto", height: 12, marginRight: 4 }}
                />
                <Text style={{ color: "#27214D", fontSize: 16, fontWeight: "bold" }}>20,000</Text>
              </View>
            </View>

            <View style={{ height: 1, backgroundColor: "#F4F4F4", marginBottom: 31 }} />

            {/* Item 3 */}
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 237, marginHorizontal: 24 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#FEF0F0",
                  borderRadius: 10,
                  paddingVertical: 19,
                  paddingHorizontal: 9,
                  marginRight: 16,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Image source={require("../assets/anh9.png")} resizeMode="stretch" style={{ width: 48, height: 25 }} />
              </TouchableOpacity>

              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold", marginBottom: 4 }}>
                  Tropical fruit salad
                </Text>
                <Text style={{ color: "#000000", fontSize: 14 }}>2packs</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 3 }}>
                <Image
                  source={require("../assets/iconchuN.png")}
                  resizeMode="stretch"
                  style={{ width: 16, height: 12, marginRight: 4 }}
                />
                <Text style={{ color: "#27214D", fontSize: 16, fontWeight: "bold" }}>20,000</Text>
              </View>
            </View>

            {/* Total & Checkout */}
            <View style={{ flexDirection: "row", alignItems: "flex-start", marginHorizontal: 25 }}>
              <View style={{ alignItems: "flex-start", marginRight: 24 }}>
                <Text style={{ color: "#000000", fontSize: 16, fontWeight: "bold" }}>Total</Text>
                <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 3 }}>
                  <Image
                    source={require("../assets/iconchuN.png")}
                    resizeMode="stretch"
                    style={{ width: 20, height: 16, marginRight: 5 }}
                  />
                  <Text style={{ color: "#27214D", fontSize: 24, fontWeight: "bold" }}>60,000</Text>
                </View>
              </View>

              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  backgroundColor: "#FFA451",
                  borderRadius: 15,
                  paddingVertical: 25,
                  zIndex: 10,
                }}
                onPress={handleCheckoutPress}
              >
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        {/* Payment Modal */}
        {showDelivery && (
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                paddingHorizontal: 2,
                zIndex: 1000,
                borderRadius: 30,
                justifyContent: "flex-end", // Ensures content is pushed to the bottom
              }}
            >
              <View
                style={{
                  width: "100%",
                }}
              >
                <TouchableOpacity
                  onPress={handleCancelPress}
                  style={{
                    position: "absolute",
                    top: 0,
                    alignSelf: "center",
                    zIndex: 1100,
                  }}
                >
                  <Image
                    source={require("../assets/Cancel.png")}
                    resizeMode="contain"
                    style={{ width: 48, height: 48 }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    padding: 30,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -10 },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                    marginTop: 60,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 10,
                      color: "#27214D",
                    }}
                  >
                    Card Holders Name
                  </Text>
                  <TextInput
                    value={cardHolderName}
                    onChangeText={setCardHolderName}
                    placeholder="Enter cardholder name"
                    style={{
                      backgroundColor: "#F3F1F1",
                      borderRadius: 10,
                      padding: 20,
                      marginBottom: 25,
                      fontSize: 18,
                      color: "#C2BDBD",
                    }}
                    autoCapitalize="none"
                    returnKeyType="done"
                  />

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      marginBottom: 10,
                      color: "#27214D",
                    }}
                  >
                    Card Number
                  </Text>
                  <TextInput
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    placeholder="Enter card number"
                    keyboardType="numeric"
                    style={{
                      backgroundColor: "#F3F1F1",
                      borderRadius: 10,
                      padding: 20,
                      marginBottom: 25,
                      fontSize: 18,
                      color: "#C2BDBD",
                    }}
                    autoCapitalize="none"
                    returnKeyType="done"
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 20, // Add space for the button at the bottom
                    }}
                  >
                    <View style={{ flex: 1, marginRight: 10 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: 15,
                          color: "#27214D",
                        }}
                      >
                        Date
                      </Text>
                      <TextInput
                        value={date}
                        onChangeText={setDate}
                        placeholder="MM/YY"
                        style={{
                          backgroundColor: "#F3F1F1",
                          borderRadius: 10,
                          padding: 20,
                          fontSize: 18,
                          color: "#C2BDBD",
                        }}
                        autoCapitalize="none"
                        returnKeyType="done"
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          marginBottom: 15,
                          color: "#27214D",
                        }}
                      >
                        CCV
                      </Text>
                      <TextInput
                        value={ccv}
                        onChangeText={setCcv}
                        placeholder="CCV"
                        keyboardType="numeric"
                        style={{
                          backgroundColor: "#F3F1F1",
                          borderRadius: 10,
                          padding: 20,
                          fontSize: 18,
                          color: "#C2BDBD",
                        }}
                        autoCapitalize="none"
                        returnKeyType="done"
                      />
                    </View>
                  </View>
                </View>

                {/* Complete Order Button */}
                <TouchableOpacity
                  style={{
                    backgroundColor: "#FFA451",
                    borderRadius: 10,
                    paddingVertical: 25,
                    alignItems: "center",
                    marginHorizontal: 0,
                    marginVertical: -20,
                    zIndex: 1200,
                    bottom: -10,
                  }}
                  onPress={() => {
                    alert("Order Confirmed!");
                    navigation.navigate('Trangchu');
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      width: 140, // Adjusted to match the image dimensions (135 Hugs)
                      height: 56, // Adjusted to match the image dimensions (56 Hugs)
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFA451", // Orange text color
                        fontSize: 12,
                        fontWeight: "bold",
                      }}
                    >
                      Complete Order
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );
}
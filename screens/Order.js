import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MyBasketScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFA451",
          borderRadius: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 15,
            paddingHorizontal: 21,
            marginBottom: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "#FF3B30",
              borderRadius: 32,
              paddingVertical: 3,
            }}
          />
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 50,
            marginLeft: 24,
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
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../assets/Vector.png")}
              resizeMode="stretch"
              style={{
                width: 10,
                height: 25,
                marginRight: 4,
              }}
            />
            <Text
              style={{
                color: "#27214D",
                fontSize: 16,
              }}
            >
              Go back
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            My Basket
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#FFFFFF",
            paddingVertical: 77,
          }}
        >
          {/* Item 1 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              paddingHorizontal: 24,
            }}
          >
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
              <Image
                source={require("../assets/anh7.png")}
                resizeMode="stretch"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginTop: 9,
                marginRight: 12,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Quinoa fruit salad
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                2packs
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 3,
                marginTop: 21,
              }}
            >
              <Image
                source={require("../assets/iconchuN.png")}
                resizeMode="stretch"
                style={{
                  width: 16,
                  height: 12,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: "#27214D",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                20,000
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: "#F4F4F4",
              marginBottom: 31,
            }}
          />

          {/* Item 2 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              paddingHorizontal: 24,
            }}
          >
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
              <Image
                source={require("../assets/anh8.png")}
                resizeMode="stretch"
                style={{
                  width: 40,
                  height: 24,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginTop: 9,
                marginRight: 12,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Melon fruit salad
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                2packs
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 3,
                marginTop: 21,
              }}
            >
              <Image
                source={require("../assets/iconchuN.png")}
                resizeMode="stretch"
                style={{
                  width: 16,
                  height: 12,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: "#27214D",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                20,000
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: "#F4F4F4",
              marginBottom: 31,
            }}
          />

          {/* Item 3 */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 237,
              marginHorizontal: 24,
            }}
          >
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
              <Image
                source={require("../assets/anh9.png")}
                resizeMode="stretch"
                style={{
                  width: 48,
                  height: 25,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 4,
                }}
              >
                Tropical fruit salad
              </Text>
              <Text
                style={{
                  color: "#000000",
                  fontSize: 14,
                }}
              >
                2packs
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingRight: 3,
              }}
            >
              <Image
                source={require("../assets/iconchuN.png")}
                resizeMode="stretch"
                style={{
                  width: 16,
                  height: 12,
                  marginRight: 4,
                }}
              />
              <Text
                style={{
                  color: "#27214D",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                20,000
              </Text>
            </View>
          </View>

          {/* Total & Checkout */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginHorizontal: 25,
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                marginRight: 24,
              }}
            >
              <Text
                style={{
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Total
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 3,
                }}
              >
                <Image
                  source={require("../assets/iconchuN.png")}
                  resizeMode="stretch"
                  style={{
                    width: 20,
                    height: 16,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: "#27214D",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  60,000
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFA451",
                borderRadius: 15,
                paddingVertical: 25,
              }}
              onPress={() => navigation.navigate("comdetail")}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

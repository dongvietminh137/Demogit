import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default ({ navigation }) => {
  const [textInput1, onChangeTextInput1] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row2}>
          <Image
            source={require('../assets/Group 4.png')} 
            resizeMode={"stretch"}
            style={styles.image4}
          />
          <View style={styles.column}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <Image
                source={require('../assets/Group 25.png')}  
                resizeMode={"stretch"}
                style={styles.image5}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text3}>
          {"Hello Tony, What fruit salad combo do you want today?"}
        </Text>
        <View style={styles.row3}>
          <View style={styles.row4}>
            <Image
              source={require('../assets/timkiem.png')}  
              resizeMode={"stretch"}
              style={styles.image6}
            />
            <TextInput
              placeholder={"Search for fruit salad combos"}
              value={textInput1}
              onChangeText={onChangeTextInput1}
              style={styles.input}
            />
          </View>
          <Image
            source={require('../assets/Group 6.png')} 
            resizeMode={"stretch"}
            style={styles.image7}
          />
        </View>
        <Text style={styles.text4}>
          {"Recommended Combo"}
        </Text>
        <View style={styles.row5}>
          <TouchableOpacity 
            style={styles.column2}
            onPress={() => navigation.navigate('giohang', { 
              name: "Honey lime combo", 
              price: "2,000", 
              image: require('../assets/giohang1.png') 
            })}
          >
            <View style={styles.row6}>
              <Image
                source={require('../assets/giohang1.png')} 
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <Image
                source={require('../assets/traitim.png')} 
                resizeMode={"stretch"}
                style={styles.image9}
              />
            </View>
            <Text style={styles.text5}>
              {"Honey lime combo"}
            </Text>
            <View style={styles.row7}>
              <View style={styles.row8}>
                <Image
                  source={require('../assets/iconchuN1.png')} 
                  resizeMode={"stretch"}
                  style={styles.image10}
                />
                <Text style={styles.text6}>
                  {"2,000"}
                </Text>
              </View>
              <Image
                source={require('../assets/iconcong.png')} 
                resizeMode={"stretch"}
                style={styles.image11}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.column3}>
            <View style={styles.row6}>
              <Image
                source={require('../assets/giohang2.png')}
                resizeMode={"stretch"}
                style={styles.image8}
              />
              <Image
                source={require('../assets/traitim.png')} 
                resizeMode={"stretch"}
                style={styles.image9}
              />
            </View>
            <Text style={styles.text5}>
              {"Berry mango combo"}
            </Text>
            <View style={styles.row7}>
              <View style={styles.row9}>
                <Image
                  source={require('../assets/iconchuN1.png')}  
                  resizeMode={"stretch"}
                  style={styles.image10}
                />
                <Text style={styles.text6}>
                  {"8,000"}
                </Text>
              </View>
              <Image
                source={require('../assets/iconcong.png')} 
                resizeMode={"stretch"}
                style={styles.image11}
              />
            </View>
          </View>
        </View>
        <View style={styles.row10}>
          <Text style={styles.text7}>
            {"Hottest"}
          </Text>
          <View style={styles.row11}>
            <Text style={styles.text8}>
              {"Popular"}
            </Text>
            <Text style={styles.text8}>
              {"New combo"}
            </Text>
            <Text style={styles.text9}>
              {"Top"}
            </Text>
          </View>
        </View>
        <View style={styles.box2}>
        </View>
        <View style={styles.row12}>
          <TouchableOpacity style={styles.column4} onPress={() => navigation.navigate('giohang')}>
            <View style={styles.row13}>
              <Image
                source={require('../assets/anh7.png')}  
                resizeMode={"stretch"}
                style={styles.image12}
              />
              <Image
                source={require('../assets/traitim.png')}
                resizeMode={"stretch"}
                style={styles.image9}
              />
            </View>
            <Text style={styles.text10}>
              {"Quinoa fruit salad"}
            </Text>
            <View style={styles.row14}>
              <View style={styles.row15}>
                <Image
                  source={require('../assets/iconchuN1.png')} 
                  resizeMode={"stretch"}
                  style={styles.image10}
                />
                <Text style={styles.text11}>
                  {"10,000"}
                </Text>
              </View>
              <Image
                source={require('../assets/iconcong.png')} 
                resizeMode={"stretch"}
                style={styles.image11}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.column5}>
            <Image
              source={require('../assets/traitim.png')} 
              resizeMode={"stretch"}
              style={styles.image13}
            />
            <Image
              source={require('../assets/giohang3.png')} 
              style={styles.image14}
            />
            <Text style={styles.text10}>
              {"Tropical fruit salad"}
            </Text>
            <View style={styles.row14}>
              <View style={styles.row15}>
                <Image
                  source={require('../assets/iconchuN1.png')} 
                  resizeMode={"stretch"}
                  style={styles.image10}
                />
                <Text style={styles.text11}>
                  {"10,000"}
                </Text>
              </View>
              <Image
                source={require('../assets/iconcong.png')}
                resizeMode={"stretch"}
                style={styles.image11}
              />
            </View>
          </View>
          <View style={styles.column6}>
            <View style={styles.view2}>
              <Image
                source={require('../assets/anh8.png')}  
                resizeMode={"stretch"}
                style={styles.image15}
              />
            </View>
            <Text style={styles.text12}>
              {"Melon fruit salad"}
            </Text>
            <View style={styles.row16}>
              <Image
                source={require('../assets/iconchuN1.png')} 
                resizeMode={"stretch"}
                style={styles.image10}
              />
              <Text style={styles.text11}>
                {"10,000"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  box: {
    flex: 1,
    alignSelf: "stretch",
  },
  box2: {
    width: 22,
    height: 2,
    backgroundColor: "#FFA451",
    marginBottom: 22,
    marginLeft: 26,
  },
  column: {
    alignItems: "center",
  },
  column2: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    marginRight: 23,
    shadowColor: "#2020200D",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 30
    },
    shadowRadius: 60,
    elevation: 60,
  },
  column3: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    shadowColor: "#2020200D",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 2,
      height: 30
    },
    shadowRadius: 60,
    elevation: 60,
  },
  column4: {
    alignItems: "flex-start",
    backgroundColor: "#FFFAEB",
    borderRadius: 10,
    paddingVertical: 16,
    marginRight: 16,
  },
  column5: {
    alignItems: "flex-start",
    backgroundColor: "#FEF0F0",
    borderRadius: 10,
    paddingVertical: 16,
    marginRight: 16,
  },
  column6: {
    alignItems: "flex-start",
    backgroundColor: "#F1EFF6",
    borderRadius: 10,
    paddingTop: 39,
    paddingBottom: 10,
  },
  image: {
    width: 16,
    height: 10,
    marginRight: 6,
  },
  image2: {
    width: 15,
    height: 10,
    marginRight: 5,
  },
  image3: {
    width: 24,
    height: 11,
  },
  image4: {
    borderRadius: 1,
    width: 22,
    height: 11,
  },
  image5: {
    width: 80,
    height: 100,
    marginBottom: 3,
  },
  image6: {
    width: 16,
    height: 16,
    marginLeft: 24,
    marginRight: 16,
  },
  image7: {
    width: 26,
    height: 17,
  },
  image8: {
    width: 80,
    height: 80,
    marginTop: 6,
    marginRight: 4,
  },
  image9: {
    width: 16,
    height: 14,
  },
  image10: {
    width: 16,
    height: 12,
    marginRight: 4,
  },
  image11: {
    width: 24,
    height: 24,
  },
  image12: {
    width: 64,
    height: 64,
    marginTop: 3,
    marginRight: 6,
  },
  image13: {
    width: 16,
    height: 14,
    marginBottom: 2,
    marginLeft: 108,
  },
  image14: {
    width: 56,
    height: 56,
    marginBottom: 3,
    marginHorizontal: 45,
  },
  image15: {
    width: 64,
    height: 50,
    marginBottom: 3,
    marginHorizontal: 45,
  },
  input: {
    color: "#86859E",
    fontSize: 14,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 21,
    marginBottom: 27,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 11,
    marginHorizontal: 24,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginHorizontal: 21,
  },
  row4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F9",
    borderRadius: 16,
    paddingVertical: 18,
    marginRight: 16,
  },
  row5: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 48,
    marginHorizontal: 24,
  },
  row6: {
    flexDirection: "row",
    marginBottom: 8,
    marginLeft: 36,
  },
  row7: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 17,
  },
  row8: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 40,
  },
  row9: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 40,
  },
  row10: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  row11: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 1,
  },
  row12: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    marginLeft: 24,
  },
  row13: {
    flexDirection: "row",
    marginBottom: 8,
    marginLeft: 38,
  },
  row14: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 9,
  },
  row15: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 2,
    marginRight: 36,
  },
  row16: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 2,
    marginHorizontal: 9,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    color: "#27214D",
    fontSize: 10,
  },
  text3: {
    color: "#27214D",
    fontSize: 20,
    marginBottom: 25,
    marginLeft: 24,
    marginRight: 47,
    width: 240,
  },
  text4: {
    color: "#27214D",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    marginLeft: 25,
  },
  text5: {
    color: "#27214D",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginHorizontal: 10,
  },
  text6: {
    color: "#F08626",
    fontSize: 14,
  },
  text7: {
    color: "#27214D",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 1,
    marginRight: 30,
  },
  text8: {
    color: "#928DB4",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 35,
  },
  text9: {
    color: "#928DB4",
    fontSize: 16,
    fontWeight: "bold",
  },
  text10: {
    color: "#27214D",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    marginLeft: 8,
  },
  text11: {
    color: "#F08626",
    fontSize: 14,
    fontWeight: "bold",
  },
  text12: {
    color: "#27214D",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    marginHorizontal: 8,
  },
  view: {
    backgroundColor: "#FF3B30",
    borderRadius: 32,
    paddingVertical: 2,
  },
  view2: {
    alignItems: "flex-end",
    marginBottom: 9,
  },
});
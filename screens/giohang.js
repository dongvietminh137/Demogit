import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const giohang = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
      <Image
          source={require('../assets/Vector.png')} 
          style={styles.backIcon}
        />
        <Text style={styles.backText}> Go back</Text>
      </TouchableOpacity>

      {/* Salad Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/anh7.png')} 
          style={styles.image}
        />
      </View>

      {/* Title and Quantity Controls */}
      <View style={styles.contentContainer}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Quinoa Fruit Salad</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
            {/* <Text style={styles.quantityButtonText}>+</Text> */}
            <Image
            source={require('../assets/iconcong.png')}
          />
          </TouchableOpacity>
          <Image
            source={require('../assets/iconchuN.png')} 
            style={styles.currencyIcon}
          />
          <Text style={styles.priceText}>{"2,000"}</Text>
        </View>

        {/* Description */}
        <Text style={styles.descriptionTitle}>One Pack Contains:</Text>
        <Image
            source={require('../assets/Line 7.png')} // Thay bằng hình ảnh biểu tượng của bạn
            style={styles.anh}
          />
        <Text style={styles.description}>
          Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
        </Text>
        <Text style={styles.subDescription}>
          If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. Make
        </Text>

        {/* Heart Icon and Add to Basket Button */}
        <View style={styles.heartAndButtonContainer}>
          <Image
            source={require('../assets/traitim.png')} // Thay bằng hình ảnh trái tim của bạn
            style={styles.heartIcon}
          />
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Order')}>
            <Text style={styles.addButtonText}>Add to basket</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA451', // Màu nền cam nhạt
  },
  anh:{
    marginTop: 65,
    marginTop: -1,
  },
  backButton: {
    marginTop: 60,
    marginLeft: 15, // Khoảng cách từ mép phải
    alignSelf: 'flex-start', // Căn nút sang bên phải
    backgroundColor: '#FFFFFF',
    borderRadius: 20, // Làm nút tròn
    paddingVertical: 10, // Thu nhỏ chiều cao
    paddingHorizontal: 10, // Thu nhỏ chiều rộng
    alignItems: 'center', // Căn giữa chữ theo chiều ngang
    flexDirection: 'row',
  },
  backIcon: {
    width: 10,
    height: 20,
    marginRight: 6,
  },
  backText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 75, // Hình tròn
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: 30,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#27214D', // Màu xanh đậm
  },
  currencyIcon: {
    width: 18,
    height: 15,
    marginLeft: 200,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27214D',
    marginLeft:2,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F9', // Màu xám nhạt
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27214D',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 15,
    color: '#27214D',
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27214D',
    marginBottom: 10,
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    color: '#27214D',
    marginBottom: 10,
    marginTop: 35,
  },
  subDescription: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
    marginTop: 30,
  },
  heartAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  addButton: {
    backgroundColor: '#FF8C00', // Màu cam
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 80,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default giohang;
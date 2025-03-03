import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const categories = [
  { id: "1", name: "Pizza", image: require("../assets/pizza.jpg") },
  { id: "2", name: "Burgers", image: require("../assets/burger.jpg") },
  { id: "3", name: "Steak", image: require("../assets/steak.jpg") },
];

const popularItems = [
  { id: "1", name: "Food 1", price: "$1", image: require("../assets/pizza.jpg") },
  { id: "2", name: "Food 2", price: "$3", image: require("../assets/pizza.jpg") },
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explorer</Text>
      
      {/* Thanh tìm kiếm với icon vị trí */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <TouchableOpacity>
          <Icon name="map-marker" size={20} color="gray" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>
      
      {/* Top Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Icon name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />
      
      {/* Popular Items - Di chuyển gần hơn */}
      <View style={[styles.sectionHeader, { marginTop: -30 }]}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginTop: -10 }}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <View style={styles.foodInfo}>
              <Text style={styles.foodTitle}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="coffee" size={20} color="orange" />
          <Text style={styles.navText}>Explorer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={20} color="gray" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  icon: { marginHorizontal: 10 },
  searchInput: { flex: 1 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  viewAll: { fontSize: 14, color: "orange" },
  categoryItem: { alignItems: "center", marginRight: 10 },
  categoryImage: { width: 80, height: 60, borderRadius: 10 },
  categoryText: { marginTop: 5, fontSize: 14 },
  foodItem: {
    backgroundColor: "#f9f9f9",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  foodImage: { width: 100, height: 80, borderRadius: 10 },
  foodInfo: { marginLeft: 10 },
  foodTitle: { fontSize: 14, fontWeight: "bold" },
  foodPrice: { color: "orange", fontWeight: "bold" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, marginTop: 5 },
});

export default ExplorerScreen;

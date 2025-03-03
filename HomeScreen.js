import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
const insightsData = [
    { title: 'Scan new', subtitle: 'Scanned 483', icon: '📷', color: '#EAF0FF' },
    { title: 'Counterfeits', subtitle: 'Counterfeit 32', icon: '⚠️', color: '#FFEAEA' },
    { title: 'Success', subtitle: 'Checkouts 8', icon: '✅', color: '#EAFCEF' },
    { title: 'Directory', subtitle: 'History 26', icon: '📅', color: '#EAF0FF' },
    { title: 'Pending', subtitle: 'Awaiting 14', icon: '⏳', color: '#FFF4E5' },
    { title: 'Rejected', subtitle: 'Declined 5', icon: '❌', color: '#FFD1D1' }
  ];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
    
        <Text style={styles.title}>Hello 👋</Text>
        <Text style={styles.subtitle}>Christie Doe</Text>
        <Image source={require('../assets/icon.jpg')} style={styles.avatar} />

      </View>
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.warning]}>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.success]}>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', padding: 20 },
  header: { flexDirection: 'column', 
    alignItems: 'flex-start' },
  title: { fontSize: 24, fontWeight: 'bold',marginTop: 5, },
  subtitle: { fontSize: 18, color: '#666', },
  avatar: { width: 40, 
    height: 40, 
    borderRadius: 20, 
    position: 'absolute', 
    right: 0, 
    top: 0 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: 158,  // Cập nhật chiều rộng
    height: 176, // Cập nhật chiều cao
    backgroundColor: '#F8F8FB', 
    padding: 20, 
    borderRadius: 16, // Cập nhật border-radius
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 10  },
  warning: { backgroundColor: '#F8F8FB' },
  success: { backgroundColor: '#F8F8FB' },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { fontSize: 12, color: '#777' },
});

export default HomeScreen;

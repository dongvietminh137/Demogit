import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={ styles.login}>Đăng Nhập</Text>
      <Text style ={ styles.dangnhap}> Nhập số điện thoại </Text>
      <Text style ={ styles.sodienthoai}>Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />
     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  login:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  dangnhap:{
    fontSize: 18,
    marginBottom: 20,
  },
  sodienthoai:{
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 240,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

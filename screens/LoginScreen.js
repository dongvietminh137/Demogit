import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('ExplorerScreen'); // Chuyển sang trang bạn vừa làm
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or sign in with</Text>
      
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="red" style={styles.icon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Icon name="facebook" size={20} color="white" style={styles.icon} />
          <Text style={styles.facebookText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: 'white' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  label: { alignSelf: 'flex-start', marginBottom: 5, fontSize: 16 },
  input: { width: '100%', padding: 12, borderWidth: 1, borderRadius: 5, marginBottom: 15, borderColor: '#ccc' },
  forgotPassword: { alignSelf: 'flex-end', marginBottom: 15 },
  signInButton: { backgroundColor: '#FFA500', padding: 20, borderRadius: 10, width: '100%', alignItems: 'center' },
  signInText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  orText: { marginVertical: 20, fontSize: 16, color: '#555' },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  socialButton: { flexDirection: 'row', alignItems: 'center', padding: 20, borderWidth: 1, borderRadius: 10, width: '48%', justifyContent: 'center', borderColor: '#ccc' },
  icon: { marginRight: 10 },
  socialText: { fontSize: 16, fontWeight: 'bold' },
  footer: { flexDirection: 'row', marginTop: 20 },
  linkText: { color: '#FFA500' },
  facebookButton: { backgroundColor: '#1877F2', borderColor: '#1877F2' },
  facebookText: { color: 'white' },
});

export default LoginScreen;

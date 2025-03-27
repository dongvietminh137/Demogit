import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

// 🎬 Splash Screen
const SplashScreen = ({ navigation }) => {
useEffect(() => {
    setTimeout(() => navigation.replace('Onboarding'), 2000);
}, []);

return (
    <View style={styles.container}>
    <Image source={require('./assets/Nectar.png')} style={styles.Nectar} />
    </View>
);
};


// 📷 Onboarding
const Onboarding = ({ navigation }) => (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
    <View style={styles.overlay}>
    <Image source={require('./assets/carot.png')} style={styles.carotImage} />
    <View style={styles.textContainer}>
    <Text style={styles.welcomeText}>Welcome</Text>
    <Text style={styles.title}>to our store</Text>
        </View>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
);
// 🔑 Sign In
const SignIn = ({ navigation }) => {
    return (
    <View style={styles.signInContainer}>
        {/* Ảnh nền chiếm 1/3 màn hình */}
        <ImageBackground source={require('./assets/raucu.jpg')} style={styles.signInBackground} />

        {/* Nội dung bên dưới */}
        <View style={styles.signInContent}>
        <Text style={styles.signInTitle}>Get your groceries {'\n'}with Nectar</Text>

        {/* Ô nhập số điện thoại với ảnh */}
        <TouchableOpacity onPress={() => navigation.navigate('PhoneNumber')}>
            <View style={styles.inputContainer}>
            <Image source={require('./assets/sdt.png')} style={styles.inputImage} />
            <Text style={styles.inputText}></Text>
            </View>
        </TouchableOpacity>

        {/* Dòng chữ căn giữa */}
        <Text style={styles.orText}>Or connect with social media</Text>

        {/* Nút đăng nhập Google & Facebook */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4285F4' }]}>
            <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#3b5998' }]}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
};


// 📞 Phone Number Input
const PhoneNumber = ({ navigation }) => {
    const [phone, setPhone] = useState('');

    return (
        <View style={styles.numberContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.numberTitle}>Enter your mobile number</Text>
                <Text style={styles.numberMobile}>Mobile Number</Text>
                <View style={styles.inputWrapper}>
                    <View style={styles.countryCodeContainer}>
                        <Image source={require('./assets/daymslaicon.jpg')} style={styles.flag} />
                        <Text style={styles.countryCode}>+880</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        keyboardType="phone-pad"
                        placeholderTextColor="#999"
                    />
                </View>
                <TouchableOpacity style={styles.numberButton} onPress={() => navigation.navigate('Verification')}>
                    <Image source={require('./assets/icon_arrow.png')} style={styles.arrowIcon} />
                </TouchableOpacity>
            </View>
    );
};


// 🔢 OTP Verification
function Verification({ navigation }) {
    return (
        <ImageBackground source={require('./assets/Mask Group.png')} style={{ flex: 1 }}>
        <View style={styles.verificationcontainer}>
            <View style={styles.verificationheader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.verificationtitle}>Enter your 4-digit code</Text>
            <View style={styles.verificationinputContainer}>
                <Text style={styles.verificationlabel}>Code</Text>
                <TextInput
                    style={styles.verificationinput}
                    maxLength={4}
                    keyboardType="numeric"
                    placeholder="----"
                    placeholderTextColor="#000"
                />
            </View>
            <View style={styles.verificationfooter}>
                <TouchableOpacity>
                    <Text style={styles.verificationresendText}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.verificationnextButton} 
                    onPress={() => navigation.navigate('NextScreen')} // Thay 'NextScreen' bằng màn hình tiếp theo
                >
                    <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    );
}
// 🏁 Main App
const Thuchanh = () => (
<NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
    <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
</NavigationContainer>
);

// 🎨 Styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center', // 🔹 Căn giữa theo chiều dọc
    alignItems: 'center',     // 🔹 Căn giữa theo chiều ngang
    backgroundColor: '#4caf50',
    },
    logo: {
    width: 150, // 🔹 Điều chỉnh kích thước ảnh
    height: 150,
    resizeMode: 'contain', // 🔹 Đảm bảo ảnh không bị méo
    },
welcomeText: {
    fontSize: 45, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Gilroy-Bold',
},
title: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white', 
    fontWeight: 'bold',
},
input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    width: 250,
    textAlign: 'center',
    marginVertical: 10,
},
button: {
    backgroundColor: '#4caf50',
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: 352,
    alignItems: 'center',
    height: 60,
},
buttonText: {
    color: 'white',
    fontSize: 18,
},
background: {
    flex:   1,
    width: '101%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
},
overlay: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',     
    paddingTop: 350,           
},

subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
},
carotImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
},
signInContainer: {
    flex: 1,
    backgroundColor: 'white',
},

signInBackground: {
    flex: 2,   
    width: '100%',
    height: '96%',
    resizeMode: 'cover',
},

signInContent: {
    flex: 2,   
    alignItems: 'center',
    paddingTop: 20,
},

signInTitle: {
    fontSize: 38,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left', 
    marginBottom: 10,
},

input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    borderRadius: 5,
    marginBottom: 20,
},
orText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
},
numberContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
},
numberTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
},
inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#D1D5DB',
    paddingVertical: 8,
    width: '100%',
},
countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
},
input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
},
verificationcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 100,
},
verificationheader: {
    position: 'absolute',
    top: 50,
    left: 20,
},
verificationtitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
},
verificationinputContainer: {
    marginBottom: 20,
},
verificationlabel: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
},
verificationinput: {
    borderBottomWidth: 2,
    borderBottomColor: '#D1D5DB',
    fontSize: 24,
    letterSpacing: 10,
    color: '#000',
},
verificationfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
verificationresendText: {
    color: '#10B981',
    fontWeight: 'bold',
},
verificationnextButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 50,
},
});

export default Thuchanh;
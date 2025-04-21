import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import splash from './screens/splash';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Trangchu from './screens/Trangchu';
import giohang from './screens/giohang';
import Order from './screens/Order';
import comdetail from './screens/comdetail';
import Trackorder from './screens/Trackorder';
import Thongtin from './screens/Thongtin';
import inputcard from './screens/inputcard';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Trangchu" component={Trangchu} options={{ headerShown: false }}/>
          <Stack.Screen name="giohang" component={giohang} options={{ headerShown: false }}/>
          <Stack.Screen name="Order" component={Order} options={{ headerShown: false }}/>
          <Stack.Screen name="comdetail" component={comdetail} options={{ headerShown: false }}/>
          <Stack.Screen name="Trackorder" component={Trackorder} options={{ headerShown: false }}/>
          <Stack.Screen name="Thongtin" component={Thongtin} options={{ headerShown: false }}/>
          <Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
          <Stack.Screen name="inputcard" component={inputcard} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import SplashScreen from "./screens/SplashScreen";
// import OnboardingScreen from "./screens/OnboardingScreen";
// import SignInScreen from "./screens/SignInScreen";
// import NumberScreen from "./screens/NumberScreen";
import LoginScreen from "./screens/LoginScreen";
import ExplorerScreen from "./screens/ExplorerScreen";
// import LoginScreen from "./screens/SignInScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ExplorerScreen" component={ExplorerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

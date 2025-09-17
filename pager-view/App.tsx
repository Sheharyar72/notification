import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingNavigator } from "./src/navigation/OnboardingNavigator";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SearchScreen } from "./src/screens/SearchScreen";
import Toast from "react-native-toast-message";

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Search: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />

        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>

      
      <Toast />
    </NavigationContainer>
  );
}
